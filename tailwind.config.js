/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        clouds: "#ecf0f1",
        silver: "#bdc3c7",
        concrete: "#95a5a6",
        asbestos: "#7f8c8d",

        midnightBlue: "#2c3e50",
        wetAsphalt: "#34495e",

        peterRiver: "#3498db",
        belizeHole: "#2980b9",

        carrot: "#e67e22",
        pumpkin: "#d35400",
      },
    },
  },
  plugins: [],
};
