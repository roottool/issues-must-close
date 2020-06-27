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
}

module.exports = withPlugins([[optimizedImages, {}]], nextConfig)
