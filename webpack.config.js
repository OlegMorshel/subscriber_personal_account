const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const dotenv = require('dotenv')
const Dotenv = require('dotenv-webpack')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

// enable this for analyze
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const isDev = process.env.NODE_ENV !== 'production'
const envConfig = dotenv.config().parsed

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
  mode: 'development',
  entry: './index.tsx',
  devtool: 'source-map',
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss'],
    alias: {
      '@src': resolvePath('./src'),
      '@public': resolvePath('./public'),
      '@hooks': resolvePath('./src/hooks'),
      '@styles': resolvePath('./src/styles'),
    },
  },
  module: {
    rules: [
      {
        test: /fonts[\\/].*\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { sourceMap: true } }],
      },
      {
        test: /\.(png|jpe?g|gif )$/i,
        loader: 'file-loader',
        options: {
          esModule: false,
          name: '[name].[ext]',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                // auto flag allows use readable classnames with HMR
                auto: true,
                localIdentName: isDev ? '[path]_[name]_[local]' : '[contenthash]',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: require('sass'),
              additionalData: `@import "@src/styles/variables.scss";`,
            },
          },
        ],
      },

      {
        test: /\.(webp)$/i,
        use: ['file-loader', 'webp-loader'],
      },
    ],
  },
  devServer: {
    static: './public',
    port: envConfig.PORT ?? 3000,
    host: envConfig.HOST ?? 'localhost',
    historyApiFallback: true,
    compress: true,
    allowedHosts: 'all',
    client: {
      overlay: false,
    },
  },
  output: {
    filename: '[name]-[contenthash].js',
    chunkFilename: '[name]-[contenthash].js',
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: '/',
  },
  optimization: {
    minimize: false,
    usedExports: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        parallel: true,
        extractComments: true,
      }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: 'async',
      minSize: 200000,
      minRemainingSize: 0,
      maxSize: 400000,
      minChunks: 2,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 5,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    new FaviconsWebpackPlugin(path.join(__dirname, 'public', 'contacts.ico')),
    new MiniCssExtractPlugin(),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new Dotenv(),
    // enable this for analyze
    // new BundleAnalyzerPlugin(), 
  ].filter(Boolean), 
}
