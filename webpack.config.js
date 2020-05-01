const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: ['./js/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/bundle.js',
  },
  devtool: isDev ? 'source-map' : '',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env']],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-transform-classes',
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          { loader: MiniCssExtractPlugin.loader },
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {},
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Also generate a test.html
      minify: { collapseWhitespace: !isDev },
      template: './index.html',
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/fonts'),
        to: path.resolve(__dirname, 'dist/fonts'),
      },
      {
        from: path.resolve(__dirname, 'src/favicon'),
        to: path.resolve(__dirname, 'dist/favicon'),
      },
      {
        from: path.resolve(__dirname, 'src/img'),
        to: path.resolve(__dirname, 'dist/img'),
      },
    ]),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
};
