const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractCSSFromVue = new ExtractTextPlugin('styles.css');
const hotMiddleWareScript = 'webpack-hot-middleware/client?reload=true';

module.exports = {
  entry: {
    main: [hotMiddleWareScript, './src/index']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            preserveWhitespace: false,
            // postcss: [
            //   require('autoprefixer')({
            //     browsers: ['last 3 versions']
            //   })
            // ],
            // loaders: {
            //   less: extractCSSFromVue.extract({
            //     loader: 'css-loader!less-loader',
            //     fallbackLoader: 'vue-style-loader'
            //   })
            // }
          }
        }
      },
      {
        test: /.less$/,
        use: [
          'style-loader',
          'css-loader?sourcemap',
          'less-loader'
        ]
      },
      {
        test: /.css$/,
        use: [
          'style-loader?sourcemap',
          'css-loader?sourcemap'
        ]
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'my Component'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('dev')
      }
    })
  ],
  devtool: '#cheap-module-eval-source-map',
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
};
