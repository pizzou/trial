module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
    
      
      fontFamily: {
        Poppins: "Poppins",
        secondary: 'Rajdhani',
        tertiary: 'Aldrich',
      },
      colors: {
        primary: "#3E82FC",
        lightprimary: "#ECF3FF",
      },
      backgroundImage: {
        Hero: "url('assets/slide-bg.jpg')",
      },
    },
  },
  plugins: [],

  animation: {
    slide: "slide 25s linear infinite"
  },
  keyframes: {
    slide: {
      "0%,100%" : {transform: "translateX(5%)"},
      "50%": {transform: "translateX(-120%)"}
    }
  }

};


