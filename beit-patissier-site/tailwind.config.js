export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // extend: {fontFamily: {
    //     bold: ["BoldFont", "sans-serif"], 
    //   } },
  },
  plugins: [require("tailwind-scrollbar")],
};
