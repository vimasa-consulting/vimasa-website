// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://vimasa.co.in",
    title: "Vimasa Consulting",
    author: `Vimasa`,
    description: "A Gatsby Starter for building homepages with DatoCMS",
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATOCMS_API_TOKEN,
        environment: process.env.DATOCMS_ENVIRONMENT,
      },
    },
    `gatsby-plugin-sass`,
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-vanilla-extract",
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WQZV6BDS",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
        routeChangeEventName: "route-changed",
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Vimasa Consulting",
        short_name: "Vimasa",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "#ffffff",
        theme_color: "#0c0c0c",
        icon: "src/favicon-32x32.png",
      },
    },
  ],
}
