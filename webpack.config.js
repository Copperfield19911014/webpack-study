const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
    mode: 'development',
    // target: "node",
    resolve: {
      alias: {
        process: "process/browser"
      },
      fallback: {
        "fs": false,
        // "tls": false,
        // "net": false,
        "path": require.resolve('path-browserify'),
        "assert": require.resolve("assert/"),
        "process": require.resolve('process')
        // "buffer": require.resolve("buffer/")
      } 
    },
    entry: './practise.js',
    output: {
        publicPath: './',
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '管理输出'
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ["buffer", "Buffer"]
        }),
    ],
    // plugins: [
    //   new NodePolyfillPlugin()
    // ]
};