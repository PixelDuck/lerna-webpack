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
    libraryTarget: 'umd',
    library: 'mylernalibrary'
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
              "@babel/proposal-object-rest-spread",
              ["@babel/plugin-transform-runtime", {
                "regenerator": true
              }]
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
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns: [outputDir]})
  ]
};
