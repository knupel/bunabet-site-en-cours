require("dotenv").config();


import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `buna bet`,
    version: `0.0.1`,
    siteUrl: `https://www.bunabet.fr`,
    author: `Stanislas Marçais`,
    google: `nostranslate`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    // MANIFEST
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "BUNA BET",
        short_name: "bunabet",
        start_url: "/",
        icon: "medias/icon.png", // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
    // FONT
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    // FILE
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `md content fr`,
        path: `${__dirname}/medias/markdown_content/fr`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `md content en`,
        path: `${__dirname}/medias/markdown_content/en`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}

export default config
