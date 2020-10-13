const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const outputDir = path.join(__dirname, 'public')

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'index.js'),
    constants: path.resolve(__dirname, 'constants.js'),
    anotherFile: path.resolve(__dirname, 'anotherFile.js')
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: outputDir,
    libraryTarget: 'umd',
    globalObject: 'this',
    library: 'my-library'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  resolve: {
    extensions: ['.js', '.cjs', '.css', '.svg']
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules\/.*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [ 
                "@babel/preset-env", 
                {
                  useBuiltIns: false
                }
              ]
            ],
            plugins: [
              "@babel/proposal-class-properties",
              "@babel/proposal-object-rest-spread"
            ]
          }
        }
      },
      {
        test: /\.css$/, 
        use: ['style-loader', 'css-loader', 
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')
              ]
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns: [outputDir]})
  ]
};
