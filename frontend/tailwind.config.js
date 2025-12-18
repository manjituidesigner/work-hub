/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter_400Regular", "System"],
        interMedium: ["Inter_500Medium", "System"],
        interSemiBold: ["Inter_600SemiBold", "System"],
      },
      colors: {
        primary: {
          600: "#2563EB",
          700: "#1D4ED8"
        }
      }
    },
  },
  plugins: [],
}

