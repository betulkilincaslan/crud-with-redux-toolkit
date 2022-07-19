/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fuelTown: "#576574",
        imperialPrimer: "#222f3e",
        lightBlueBallerina: "#ecf0f1",
        stormPetrel: "#8395a7",
        pastelRed: "#ff6b6b",
        amour: "#ee5253",
        casandoraYellow: "#feca57",
        doubleDragonSkin: "#ff9f43",
        wildCaribbean: "#1dd1a1",
        darkMountain: "#10ac84",
      },
    },
  },
  plugins: [],
};
