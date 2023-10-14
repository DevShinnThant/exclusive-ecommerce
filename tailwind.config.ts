/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "var(--bg)",
        primary: "var(--primary)",
        primary_one: "var(--primary-1)",
        secondary: "var(--secondary)",
        secondary_one: "var(--secondary-1)",
        secondary_two: "var(--secondary-2)",
        text: "var(--ext)",
        text_one: "var(--text-1)",
        text_two: "var(--text-2)",
        button: "var(--button)",
        button_one: "var(--button-1)",
        button_two: "var(--button-2)",
        button_hover: "var(--hover-button)",
        button_hover_one: "var(--hover-button-1)",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn .3s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
