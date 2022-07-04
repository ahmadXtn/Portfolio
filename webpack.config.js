// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";

//const stylesHandler = {loader: 'style-loader', options: {injectType: 'linkTag'}};
const stylesHandler = MiniCssExtractPlugin.loader;

console.log(isProduction);
console.log(stylesHandler);

const PATHS = {
    build: path.resolve(__dirname, 'build'),
    dist: path.resolve(__dirname, 'dist'),
    src: path.resolve(__dirname, 'src'),
}

const config = {
    entry: "./src/index.js",
    output: {
        filename: 'name.[contenthash].js',
        path: PATHS.build,
        clean: true
    },
    devServer: {
        open: false,
        host: "localhost",
        port: 3300
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            scriptLoading: "defer",
            inject: true /* automatic insertion of CSS link tag*/
        }),
        new MiniCssExtractPlugin({
            chunkFilename: '[id].css',
        }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)$/i,
                loader: "babel-loader",
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, "css-loader", "postcss-loader", "sass-loader"],
            },
            {
                test: /\.css$/i,
                use: [
                    stylesHandler,
                    "css-loader",
                    "postcss-loader"
                ],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                type: "asset",
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";
        config.output.path = PATHS.dist
    } else {
        config.mode = "development";
        config.output.path = PATHS.build;
    }
    return config;
};

