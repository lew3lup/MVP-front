const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/main.tsx",
    output: {
        path: path.resolve(__dirname),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: "ts-loader"
            },
            {
                test: /\.s[ac]ss$/,
                exclude: /node_modules/,
                use: ["style-loader", {loader: "css-loader", options: {url: false}}, "sass-loader"]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.sass', '.css'],
    },
    target: "web"
}