const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require( 'nodemon-webpack-plugin' );

module.exports = {
  entry: './src/main.ts',
  mode: 'development',
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  externals: [nodeExternals()],
  plugins: [
    new NodemonPlugin(), 
  ],
};