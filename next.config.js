/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const nextConfig = {
  /**
   * Hot Module Reloading with Next.js Docker development environment
   * @url https://www.codemochi.com/blog/2019-08-27-nextjs-hmr
   */
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }

    return config
  },
}

module.exports = withPlugins([[optimizedImages, {}]], nextConfig)
