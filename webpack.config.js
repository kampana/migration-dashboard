const path = require('path');

module.exports = {
  entry: './src/main.ts',
  mode: 'development',
  module: {
    rules: [
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};