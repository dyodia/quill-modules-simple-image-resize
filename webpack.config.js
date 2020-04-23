const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: './src/QuillSimpleImageResize.ts',
  output: {
    filename: 'quill-simple-image-resize.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'quill-simple-image-resize',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts', '.js', '.css'
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'quill-simple-image-resize.css',
    })
  ]
};
