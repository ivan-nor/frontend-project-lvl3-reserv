// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   mode: process.env.NODE_ENV || 'development',
//   entry: path.join(__dirname, '/src/index.js'), // webpack entry point. Module to start building dependency graph
//   output: {
//     path: path.join(__dirname, 'public'), // Folder to store generated bundle
//     filename: 'bundle.js', // Name of generated bundle after build
//     publicPath: '/', // public URL of the output directory when referenced in a browser
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.join(__dirname, '/src/public/index.html'),
//       title: 'My App',
//     }),
//   ],
// };

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: path.join(__dirname, '/src/index.js'), // webpack entry point. Module to start building dependency graph
  output: {
        path: path.join(__dirname, 'dist'), // Folder to store generated bundle
        filename: 'main.js', // Name of generated bundle after build
        publicPath: '/', // public URL of the output directory when referenced in a browser
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000',
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, '/src/public/index.html'),
      filename: 'index.html',
    }),
  ],
};