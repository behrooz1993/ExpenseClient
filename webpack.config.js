const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const Paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname,'src'),
    JS: path.resolve(__dirname,'src/js'),
};

module.exports = {
    entry: path.join(paths.JS, 'app.js'),
    output: {
      path: paths.DIST,
      filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.join(paths.SRC, 'index.html'),
        }),
    ],
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
              'babel-loader',
            ],
          },
          {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
           },
           {
            test: /\.(png|jpg|gif)$/,
            use: [
                'file-loader',
            ],
            },
        ],
      },
      resolve: {
        extensions: ['.js', '.jsx'],
      },
  };