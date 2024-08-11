const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    return {
        mode: env.mode ?? 'production',
        entry: path.resolve(__dirname, 'src', 'index.js'),
        output: {
          path: path.resolve(__dirname, 'dist'),
          filename: '[name].[contenthash].js',
          assetModuleFilename: 'src/assets/img/[name].[ext]',
          clean: true,
        },
        plugins: [
            new HTMLWebpackPlugin({
                template: path.resolve(__dirname, 'src', 'index.html')
            })
        ],
        devServer: {
          port: 4200,
          open: true
        },
        module: {
          rules: [
            {
              test: /\.css$/,
              use: [
                'style-loader',
                'css-loader'
              ]
            },
            {
              test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
              type: 'asset/resource'
           }
          ]
        }
    }
}