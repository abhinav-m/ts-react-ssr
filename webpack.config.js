const path = require("path")
const baseConfig = {
  entry: "./server/index.ts",
  output: {
    filename: "js/server.js",
    path:  path.resolve(process.cwd(), 'dist'), //Absolute path
    publicPath: "/" // Relative to server root
  },
  //Enabling source maps for debugging
  devtool: "cheap-module-eval-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: [{ loader: "awesome-typescript-loader" }]
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve("url-loader"),
        options: {
          limit: 10000,
          name: "static/media/[name].[hash:8].[ext]"
        }
      },
       // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
       { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /(\.scss|\.css)$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },

      // "url" loader works like "file" loader except that it embeds assets
      // smaller than specified limit in bytes as data URLs to avoid requests.
      // A missing `test` is equivalent to a match.
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve("url-loader"),
        options: {
          limit: 10000,
          name: "static/media/[name].[hash:8].[ext]"
        }
      }
    ]
  },
  
    target:  'node'
  
};

module.exports = baseConfig;
