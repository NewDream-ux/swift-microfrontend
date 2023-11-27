
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;
module.exports = {
  mode: 'development',
  target: 'web',
  output: {
    publicPath: "http://localhost:3001/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  devServer: {
    port: 3001,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      }
    ],
  },
  plugins: [ // This is important part
    new ModuleFederationPlugin({
      name: "SwiftPoc",
      filename: "remoteEntry.js",
      exposes: {
        "./Tab":"./src/Components/Tabs/Tab"
      },
      shared: {
        react: {
          singleton: true,
          eager:true,
          
        },
        "react-dom": {
          singleton: true,
          eager:true,
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    })
  ],
};