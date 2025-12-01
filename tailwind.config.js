/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A6EBD",
        primaryLight: "#D7ECFF",
        secondary: "#00A8E8",
        accent: "#0091D5",
        grayBg: "#F8FAFC",
        northernPink: "#D8AFC1",
        northernPinkLight: "#E7CCDA",
        northernBorder: "#C59FAA",
        textDark: "#4A4A4A",
        sectionBg: "#f7eaea",         // Light MAS pink
        northernBorder: "#c9a5b1",    // Border shade from PDF
        northernHeading: "#7d2248", 
        medicalBlue: "#003399",
        medicalGreen: "#8CC63F",
        medicalBg: "#F4FFE9",
        medicalBorder: "#CCE6B8",  // Northern MAS dark purple/pink
        mtmPrimary: "#0057B8",   // strong blue
        mtmAccent: "#63A103",    // green
        mtmBg: "#F5FBFF",        // light blue background
        mtmBorder: "#C9DFF5",    // soft border
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
