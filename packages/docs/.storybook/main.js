const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.[tj]s'],
  addons: [
    '@storybook/addon-storysource',
    '@storybook/addon-docs',
  ],
  webpackFinal: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    };
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
