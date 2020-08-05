/* eslint-disable @typescript-eslint/no-var-requires */
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const withCssSettings = withCSS({
  webpack(config) {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: 'linaria/loader',
          options: {
            sourceMap: process.env.NODE_ENV !== 'production',
          },
        },
      ],
    });

    return config;
  },
});

module.exports = withPlugins([[optimizedImages, {}]], withCssSettings);
