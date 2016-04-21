import path from 'path';
import webpack from 'webpack';
import HtmlPlugin from 'html-webpack-plugin';

export default {
  cache: true,
  debug: true,
  devtool: '#inline-source-map',
  entry: {
    app: [
      './src/index.js',
      './src/styles.scss'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
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
        loader: 'source-map',
        include: [path.resolve(__dirname, 'node_modules/actor-sdk')],
        exclude: /(node_modules)/
      },
      {
        test: /\.css$/,
        loader: 'postcss'
      }
    ],
    loaders: [{
      test: /\.(scss|css)$/,
      loaders: [
        'style',
        'css',
        'sass?outputStyle=expanded&includePaths[]=' + path.resolve(__dirname, 'node_modules')
      ]
    }, {
      test: /\.js$/,
      loader: 'babel?cacheDirectory',
      exclude: /(node_modules)/
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.(png|svg)$/,
      loader: 'file?name=assets/images/[name].[ext]'
    }, {
      test: /\.(mp3)$/,
      loader: 'file?name=assets/sounds/[name].[ext]'
    }, {
      test: /\.(ttf|eot|svg|woff|woff2)$/,
      loader: 'file?name=assets/fonts/[name].[ext]'
    }]
  },
  postcss: [
    require('autoprefixer')()
  ],
  plugins: [
    new HtmlPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.ResolverPlugin([
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('package.json', ['main'])
    ], ['context']),
    new webpack.NoErrorsPlugin()
  ]
};
