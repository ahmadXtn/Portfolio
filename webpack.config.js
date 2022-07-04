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
    //entry: {app:"./src/index.js"},
    output: {
        filename: '[name].js',
        path: PATHS.build,
        clean: true,
        asyncChunks: false,
    },

    /* https://webpack.js.org/configuration/optimization/ */
    /* https://webpack.js.org/configuration/optimization/#optimizationruntimechunk */

    optimization: {
        runtimeChunk: 'single',
        // The value 'single' instead creates a runtime file to be shared for all generated chunks
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
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/i,
                type: "asset/resource",
                generator: {                        /*https://webpack.js.org/configuration/module/#modulegenerator*/
                    outputPath: 'fonts/',
                    filename: '[hash][ext][query]', /*https://webpack.js.org/guides/asset-modules/#custom-output-filename*/

                },
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

