const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    //filename: 'bundle.[hash:5].js' bc now html doesn't know about it. can't source it
    filename: 'bundle.js'
  },
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
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
      	//load images
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  //hot reloading for changes
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  //use webpack to serve 
  devServer: {
  	contentBase: './dist',
  	hot: true
  }
};