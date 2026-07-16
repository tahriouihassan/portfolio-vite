/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.astro", "src/**/*.{js,jsx,ts,tsx,md,mdx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        squgily: "url('/divider.svg')",
        topbar:
          "linear-gradient(to right, rgb(217, 70, 239), rgb(220, 38, 38), rgb(251, 146, 60))",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease both",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      p_text: "#b1b1b1",
      head_text: "#eaeaea",
      navbar_back: "rgba(17, 17, 17, 0.8)",
      item_back: "#161616",
      item_hover_back: "#2a2a2a",
      action_back: "#242424",
      action_border: "#363636",
      border_sm: "rgba(54, 54, 54, 0.6)",
      action_text: "#d9d9d9",
      btn_back: "#2e2e2e",
      btn_text: "#f6f6f6",
      link_text_hover: "#6366F1",
      link_border_hover: "rgb(99,102,241, 0.4)",
      link_border: "#6c6c6c",
      link: "#d9d9d9",
      background: "#202026",
      accent: "#6366F1",
      selectionBack: "rgba(40,41,96)",
    },
    fontFamily: {
      logo: "Southam Demo",
      theme: ["MonoLisa", "Monaco", "Source Code Pro", "monospace"],
      theme_bold: ["MonoLisaBold", "Monaco", "Source Code Pro", "monospace"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      slg: "978px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
