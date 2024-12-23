/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "rosa-ilovefy": "#A0153E",
        "light-rosa-ilovefy": "#CF91A3",
        "dark-rosa-ilovefy": "#901C3E",
      },
      boxShadow: {
        "intense-dark-rosa": "0px 0px 14px 5px rgba(255, 0, 0, 0.2)",
      },
      backgroundImage: {
        "gradient-ilovefy": "linear-gradient(to right, #A0153E, #6A0C27)",
        // "gradient-ilovefy": "linear-gradient(to right, #A0153E, #901C3E)",
        "gradient-neutral": "linear-gradient(to bottom, #ffffff, #f9fafb)",
      },
      rotate: {
        "-20": "-20deg",
        "-24": "-24deg",
      },
    },
  },
  plugins: [],
};
