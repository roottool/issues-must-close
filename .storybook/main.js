const Path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    'storybook-addon-designs',
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          configFile: Path.resolve(__dirname, './tsconfig.json'),
        },
        include: [Path.resolve(__dirname, '../src')],
        transpileManager: true,
      },
    },
  ],
  webpackFinal: async (config) => {
    const PUBLIC = 'public'
    const publicAlias = `@${PUBLIC}`
    config.resolve.alias[publicAlias] = Path.resolve(__dirname, `../${PUBLIC}`)
    config.resolve.extensions.push('.ts', '.tsx', '.png')

    return config
  },
}
