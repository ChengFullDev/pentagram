/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "600px",
      md: "800px",
      lg: "1040px",
      xl: "1200px",
      "2xl": "1600px",
    },
    extend: {
      fontFamily: {
        aktiv: ["Aktiv Grotesk Regular", "sans-serif"],
      },
      colors: {
        primary: "#000000",
        secondary: "#666666",
        inverse: "#ffffff",
        carousel: "#f5f5f5",
      },
      spacing: {
        "outer-gutter": "20px",
        gutter: "16px",
        header: "80px",
      },
      maxWidth: {
        120: "120px",
      },
      fontSize: {
        "body-1": ["16px", { lineHeight: "24px" }],
        "heading-4": ["24px", { lineHeight: "32px" }],
      },
      aspectRatio: {
        "3/4": "3 / 4",
        "7/3": "7 / 3",
      },
    },
  },
  plugins: [],
};
