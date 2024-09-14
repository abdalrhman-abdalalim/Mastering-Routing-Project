/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "React-color": "rgba(20, 158, 202, 0.1)",
        "Back-color": "rgb(35 39 47)",
      },
    },
  },
  plugins: [],
};
