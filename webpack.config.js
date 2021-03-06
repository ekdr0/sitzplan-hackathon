module.exports = {
  entry: './app/routing.js',
  output: {
    path: 'builds',
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /node_modules\/pixi/,
        loader: 'ify-loader'
      },
      {
        test: /\.png$/,
        loader: 'file',
        exclude: /example/
      },
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread']
        },
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        loaders: ['style', 'css', 'sass']
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  }
};
