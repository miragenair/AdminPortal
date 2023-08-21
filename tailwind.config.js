/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'OnNeutralActive': '#FFA500',
      'OnNeutralButtons': '#1B1C1E',
      'NeutralButtonShadow': '#A8996D',
      'NeutralShadowMeduim': '#EFE5C7',
      'NeutralButtonShadowLight': '#F0EBDD',
      'NeutralButtonSurface': '#FCFBF5',
      'NeutralSurfaceBgUp': '#FFFFFF',
      'SecondarySurface': '#4ECB71',
      'PrimarySurfaceDimmer': '#FFEAC2',
      'PrimarySurfaceDim': '#FED17B',
    },
    extend: {},
    fontFamily: {
      mainfont: ["Barlow", "sans-serif"]
    }
  },
  plugins: [],
}
