
module.exports = {
  entry: './src/App.js',

  output: {
    filename: 'bundle.js'
  },

  devServer: {

    compress: true,

    disableHostCheck: true,   // That solved it

  },


  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader']
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};