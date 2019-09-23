const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  /* one main entry point for js */
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.[hash:5].js'
  },
  plugins: [
    /* used for hot reloading module (hrm) in dev*/
    new webpack.HotModuleReplacementPlugin(),
    /* used to wipe dist/ every build */
    new CleanWebpackPlugin(),
    /* used to create dist/.html pages that include js and css hash files*/
  	new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html'
    }),
    /* used to bundle css files into single file */
    new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash:5].css',
    })
  ],
  module: {
  	/* loaders to compile non js languages */
    rules: [
      {
      	//babel transpiler loader
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
      	//css and sass-loader
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
  /* use webpack to for webserver */ 
  devServer: {
  	contentBase: './src',
  	hot: true,
    inline: true,
    //contentBase: path.resolve(__dirname, "../src"),
    watchContentBase: true,
  }
};