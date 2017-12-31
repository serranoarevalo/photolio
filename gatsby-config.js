module.exports = {
  siteMetadata: {
    title: `Serrano Arévalo`,
    location: "Chiang Mai, Thailand 🇹🇭",
    travelStart: "2015-06-02"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    `gatsby-plugin-styled-components`
  ]
};
