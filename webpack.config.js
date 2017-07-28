const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// base webpack config
const config = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { sourceMap: true, importLoaders: 1 },
            },
            {
              loader: 'postcss-loader',
              options: { sourceMap: true }
            },
          ],
        }),
      }, {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.(jpg|jpeg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        }
      }, {
        test: /\.(txt|yaml|md)$/,
        use: 'raw-loader'
      }, {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=100000'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  entry: './app/index.jsx',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin('[name].[contenthash].css'),
    new HtmlWebpackPlugin({
      template: 'index.template.ejs',
      inject: 'body',
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: "/dist/"
  }
};

module.exports = (env = {}) => {
  // Variables set by npm scripts in package.json
  console.log(env);
  const isProduction = env.production === true;

  if (isProduction) {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      })
    );
    config.plugins.push(
      new UglifyJSPlugin({
        sourceMap: true
      })
    );
    config.plugins.push(
      new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0
      })
    );
    config.entry = {
      app: './app/index.jsx',
      vendor: ['react', 'react-dom', 'react-router', 'prop-types', 'redux'],
    };
    config.plugins.push(
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
      })
    );
  } else {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    );
  }

  if (env.analyze) {
    config.plugins.push(
      new BundleAnalyzerPlugin()
    );
  }

  return config;
};
