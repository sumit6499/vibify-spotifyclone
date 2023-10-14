/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens:{
        xs:"480px",
        ss:"620px",
        sm:"768px",
        md:"1060px",
        lg:"1200px",
        xl:"1440px",
      }
    },
  },
  plugins: [],
};
