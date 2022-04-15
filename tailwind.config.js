module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mob': '429px',
      'tab': '834px',
      'sm': '100px'
    },
    extend: {
      fontFamily: {
        nexa: ["NEXA", "bold"],
        mulish:["mulish", "bold"]
      }
    }
  },
  plugins: [],
}