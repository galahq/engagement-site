module.exports = {
  siteMetadata: {
    title: 'Briefing: from Gala',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-85341915-2',
      },
    },
  ],
}
