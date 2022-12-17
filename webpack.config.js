const path                 = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin    = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/animator.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "main.js",
  },
  devServer: {
    port: 3001,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
        }
      }, 
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },    
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'}),
  ]
}