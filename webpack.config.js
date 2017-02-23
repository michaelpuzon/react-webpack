const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  module: {
    rules: [
      /*
      {
        test: /\.css$/,
        //use: 'css-loader'
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: "css-loader", options: { sourceMap: true } }
          ]
        })
      }, {
      */
      {
        test: /(\.css|\.scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                //modules: true,
                //importLoaders: true
                //localIdentName: "[name]__[local]___[hash:base64:5]"
              }
            },
            /*
            {
              loader: "postcss-loader",
              options: {
                plugins: function () {
                  return [
                    require("autoprefixer")
                  ];
                }
              }
            },
            */
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'react'
          ],
          plugins: []
        },
        include: [
          path.resolve(__dirname, 'app')
        ]
      }, {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
  //entry: './app/index.js',
  entry: "./app/index.js",
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ],
  devtool: 'cheap-module-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/dist/"
  }
};