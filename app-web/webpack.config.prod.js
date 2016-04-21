import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlPlugin from 'html-webpack-plugin';

export default {
  devtool: '#source-map',
  entry: {
    app: [
      './src/index.js',
      './src/styles.scss'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[chunkhash].js',
    sourceMapFilename: '[file].map'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    root: [path.join(__dirname, 'src')],
    fallback: [path.join(__dirname, 'node_modules')]
  },
  resolveLoader: {
    modulesDirectories: ['node_modules'],
    fallback: [path.join(__dirname, 'node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: [
          path.resolve(__dirname, 'src')
        ]
      },
      {
        test: /\.js$/,
        loader: 'source-map',
        include: [
          'actor-js',
          'actor-sdk',
          'actor-emoji'
        ]
      },
      {
        test: /\.css$/,
        loader: 'postcss'
      }
    ],
    loaders: [
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?includePaths[]=' + path.resolve(__dirname, 'node_modules'))
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|svg)$/,
        loader: 'file?name=assets/images/[name].[ext]'
      },
      {
        test: /\.(mp3)$/,
        loader: 'file?name=assets/sounds/[name].[ext]'
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        loader: 'file?name=assets/fonts/[name].[ext]'
      }
    ]
  },
  postcss: [
    require('autoprefixer')()
  ],
  plugins: [
    new HtmlPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new ExtractTextPlugin('styles.[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.ResolverPlugin([
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('package.json', ['main'])
    ]),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ]
};
