const path = require('path');
/* used for hot reloading module (hrm) */
const webpack = require('webpack');
/* used to bundle css files into single file */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
/* used to create dist/.html pages that include js and css hash files */
const HtmlWebpackPlugin = require('html-webpack-plugin');
/* used to wipe dist/ every build */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.[hash:5].js' //bc now html doesn't know about it. can't source it
  },
  //hot reloading for changes
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
  	new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: 'style.[hash:5].css',
      //chunkFilename: '[id].css',
    })
  ],
  module: {
  	//loaders
    rules: [
      {
      	//babel transpiler loader
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
      	//sass-loader
        test: /\.(css|scss)$/,
        use: [
	        {
	        	loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true
            }
	        },
	        'css-loader', 'sass-loader'
        ]
      },
      {
      	/* save images as files per spec */
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        /* save svg as files if larger than 1mb */
        test: /\.(svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1000000
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  //use webpack to serve 
  devServer: {
  	contentBase: './dist',
  	hot: true
  }
};