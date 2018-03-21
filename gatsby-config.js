module.exports = {
  siteMetadata: {
    title: 'Thomas Chang Portfolio'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          `gatsby-remark-emoji`,
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false,
              sizeByPixelDensity: true
            }
          },
          'gatsby-remark-responsive-iframe'
        ]
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-transformer-pdf',
    'gatsby-plugin-sharp'
  ]
};
