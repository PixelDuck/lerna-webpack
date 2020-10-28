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
    globalObject: 'this',
    umdNamedDefine: true,
    library: '@my-lerna-library/core'
  },
  externals: {
    '@my-lerna-library/another-package': {
      root: '@my-lerna-library/another-package',
      commonjs: '@my-lerna-library/another-package',
      commonjs2: '@my-lerna-library/another-package'
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
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns: [outputDir]})
  ]
};
