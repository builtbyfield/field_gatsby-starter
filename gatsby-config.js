module.exports = {
  pathPrefix: "/field_gatsby-starter",
  siteMetadata: {
    title: `Field Gatsby Starter`,
    description: `Opinionated Gatsby starter by Field.`,
    author: `@builtbyfield`,
  },
  plugins: [
    `gatsby-transformer-sharp`,

    /**
     * Forces Gatsby to use trailing slashes on pathnames to ensure consistent URLs
     * https://www.gatsbyjs.org/packages/gatsby-plugin-force-trailing-slashes/
     */
    `gatsby-plugin-force-trailing-slashes`,

    /**
     * Provides drop-in support for server rendering data added with React Helmet.
     * React Helmet is a component which lets you control your document head using their React component.
     */
    `gatsby-plugin-react-helmet`,

    /**
     * Exposes several image processing functions built on the Sharp image processing library.
     * This is a low-level helper plugin generally used by other Gatsby plugins.
     * gatsby-image uses it for example.
     */
    `gatsby-plugin-sharp`,

    /**
     * Enables users to add the site to the home screen on most mobile browsers.
     * Also provides a number of other features such as:
     *    1. Auto icon generation
     *    2. Favicon support
     *    3. Legacy icon support (iOS)
     *    4. Cache busting
     * https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/
     */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `field_gatsby-starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#f1c71d`,
        theme_color: `#f1c71d`,
        display: `minimal-ui`,
        icon: `src/images/field_favicon.png`,
      },
    },

    /**
     * This plugin enables adding components which live above the page components and persist across page changes.
     * https://www.gatsbyjs.org/packages/gatsby-plugin-layout/
     */
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/layout/src/Layout.js"),
      },
    },

    /**
     * Provide support for using the css-in-js library Emotion including server side rendering.
     * https://www.gatsbyjs.org/packages/gatsby-plugin-emotion/
     */
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        /**
         * Accepts all options defined by `babel-plugin-emotion` plugin.
         * https://emotion.sh/docs/babel-plugin-emotion
         */
      },
    },

    /**
     * Allows us to set up custom aliases for directories.
     * https://www.gatsbyjs.org/packages/gatsby-plugin-module-resolver/
     */
    {
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: "./src",
        aliases: {
          components: "./components",
          images: "./images",
          layouts: "./layouts",
          pages: "./pages",
          templates: "./templates",
        },
      },
    },
  ],
}
