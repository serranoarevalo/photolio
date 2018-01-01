module.exports = {
  siteMetadata: {
    title: `Serrano Arévalo`,
    location: "Chiang Mai, Thailand 🇹🇭",
    travelStart: "2015-06-02"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: `${__dirname}/cities/`
      }
    },
    `gatsby-transformer-remark`,
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
