/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path')
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const nextConfig = {
  webpack: (config) => {
    const PUBLIC = 'public'
    const publicAlias = `@${PUBLIC}`
    config.resolve.alias[publicAlias] = resolve(__dirname, PUBLIC)

    return config
  },
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
