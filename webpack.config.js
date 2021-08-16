const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  name: 'react-project1',
  mode: 'development', // 실서비스 때는 'production'
  devServer: {
    publicPath: '/dist/',
    hot: true
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },
  
  entry: {
    app: ['./client']
  }, // 입력

  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties', 'react-refresh/babel']
      }
    }]
  },

  plugins: [
    new RefreshWebpackPlugin()
  ],

  output: {
    publicPath: '/dist/',
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  } // 출력
};