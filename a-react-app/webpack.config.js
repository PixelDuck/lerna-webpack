const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const outputDir = path.join(__dirname, 'dist');

module.exports = {
  entry: {
    index: path.join(__dirname, 'src', 'client', 'index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: outputDir,
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/.*/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
    overlay: true
  },
  plugins: [
    new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns: [outputDir]}),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'client', 'index.html'),
      favicon: path.join(__dirname, 'src', 'client', 'favicon.ico')
    })
  ]
};
