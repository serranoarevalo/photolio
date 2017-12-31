import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  googleFonts: [
    {
      name: "Nunito",
      styles: ["400", "700", "900"]
    },
    {
      name: "Open Sans",
      styles: ["400", "600"]
    }
  ],
  headerFontFamily: ["Nunito", "sans-serif"],
  bodyFontFamily: ["Nunito", "sans-serif"]
});

export default typography;
