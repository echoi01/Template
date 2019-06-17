const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const OUPUT_DIRECTORY = 'dist';

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.join(__dirname, OUPUT_DIRECTORY),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  // Configurations for webpack-dev-server
  devServer: {
    port: 8888, // webpack-dev-server
    open: true, // automatically open homepage on startup toggle
    proxy: {
      '/': 'http://localhost:4000' // Express server to send API requests to
    }
  },
  plugins: [
    new CleanWebpackPlugin(),  // clean-webpack-plugin removes build folder(s) before building
    new HtmlWebpackPlugin({  // html-webpack-plugin simplifies creation of HTML files for your bundle
      template: './public/index.html',
      // favicon: './public/favicon.png'
    })
  ]
};
