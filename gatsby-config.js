const SITE_TITLE = 'Issues Must Close!';

/**
 * @type import('gatsby').GatsbyConfig
 */
module.exports = {
  siteMetadata: {
    title: SITE_TITLE,
    description: `We can find issues of open source projects.`,
    author: `roottool`,
    charSet: `UTF-8`,
    viewport: `width=device-width, initial-scale=1, shrink-to-fit=no`,
    'og:title': SITE_TITLE,
    'og:type': `website`,
    // TODO: Create the url
    'og:url': ``,
    '"og:image': `logo.png`,
    'twitter:title': SITE_TITLE,
    'twitter:card': `summary`,
    'twitter:description': `We can find issues of open source projects.`,
    'twitter:image': `logo.png`,
    'twitter:image:alt': `logo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
