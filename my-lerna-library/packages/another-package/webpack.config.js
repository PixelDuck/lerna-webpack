const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const outputDir = path.join(__dirname, 'dist')

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src', 'index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: outputDir,
    libraryTarget: 'global',
    library: 'myLernaLibraryAnotherPackage'
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
      { 
        test: /\.svg$/, 
        loader: 'svg-url-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns: [outputDir]})
  ]
};
