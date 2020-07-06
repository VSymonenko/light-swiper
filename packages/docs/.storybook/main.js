const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.[tj]s'],
  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-storysource',
    '@storybook/addon-docs',
  ],
  webpackFinal: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    };
    return config;
  },
};
