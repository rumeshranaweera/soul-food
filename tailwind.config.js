/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primaryColor: "#b9ffb8",
        backGroundLight: "#e6ffe7",
        backGroundDark: "#023430",
      },
      dropShadow: {
        "3xl": "0 35px 35px #b9ffb8",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      animation: {
        blob: "blob 10s infinite alternate",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px,0px) ",
            opacity: "0.1",
          },
          "100%": {
            transform: "translate(-53px,45px)",
            opacity: "0.5",
          },
        },
      },
      backgroundImage: {
        "hero-image":
          "url('https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/01/08/19/photo1jpg.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
