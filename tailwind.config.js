/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "rosa-lovefy": "#A0153E",
        "light-rosa-lovefy": "#CF91A3",
        "dark-rosa-lovefy": "#901C3E",
      },
      boxShadow: {
        "intense-dark-rosa": "0px 0px 14px 5px rgba(255, 0, 0, 0.2)",
      },
      backgroundImage: {
        "gradient-lovefy": "linear-gradient(to right, #A0153E, #901C3E)",
        "gradient-neutral": "linear-gradient(to bottom, #ffffff, #f9fafb)",
      },
    },
  },
  plugins: [],
};
