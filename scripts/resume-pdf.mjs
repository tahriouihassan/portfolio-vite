/**
 * Renders the built /resume/ page to public/Hassan-Tahrioui-Resume.pdf using
 * the page's own print styles, so the PDF and the web resume never drift.
 *
 *   npm run resume:pdf
 *
 * Needs a local Chrome (or set CHROME_PATH). Commit the generated PDF:
 * Vercel serves it from public/ and doesn't run this script.
 */
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";

const root = fileURLToPath(new URL("..", import.meta.url));
const dist = join(root, "dist");
const out = join(root, "public", "Hassan-Tahrioui-Resume.pdf");

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".otf": "font/otf",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
};

// Minimal static server for dist/ (the page uses root-relative asset URLs).
const server = createServer(async (req, res) => {
  let path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname));
  if (path.endsWith("/") || path.endsWith("\\")) path = join(path, "index.html");
  try {
    const body = await readFile(join(dist, path));
    res.writeHead(200, { "Content-Type": types[extname(path)] ?? "application/octet-stream" });
    res.end(body);
  } catch {
    res.writeHead(404).end();
  }
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const { port } = server.address();

const browser = process.env.CHROME_PATH
  ? await chromium.launch({ executablePath: process.env.CHROME_PATH })
  : await chromium.launch({ channel: "chrome" });

try {
  const page = await browser.newPage();
  // Analytics has no place in a PDF render.
  await page.route(/googletagmanager|google-analytics/, (r) => r.abort());
  await page.goto(`http://127.0.0.1:${port}/resume/`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  // The PDF's metadata title comes from document.title.
  await page.evaluate(() => {
    document.title = "Hassan Tahrioui – Resume";
  });
  await page.emulateMedia({ media: "print" });
  await page.pdf({ path: out, preferCSSPageSize: true, printBackground: true });
  console.log(`Wrote ${out}`);
} finally {
  await browser.close();
  server.close();
}
