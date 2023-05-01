/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],

  theme: {
    extend: {
      backgroundColor: {
        backgroundPage: "#121214",
        backgroundHeader: "#202024",
      },

      colors: {
        "green-feed": "#00875f",
      },
    },
  },
  plugins: [],
};
