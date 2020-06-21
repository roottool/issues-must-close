/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path')
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const nextConfig = {
  webpack: (config) => {
    const publicAlias = '@public'
    config.resolve.alias[publicAlias] = resolve(__dirname, 'public')

    return config
  },
}

module.exports = withPlugins([[optimizedImages, {}]], nextConfig)
