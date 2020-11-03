const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// FIXME try to build
module.exports = {
  entry: path.resolve(__dirname, '..', 'src/swiper/index.ts'),
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.ts/,
        use: 'ts-loader',
        exclude: /node_modules/,
        options: {
          context: __dirname,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '..', 'dist'),
  },
};
