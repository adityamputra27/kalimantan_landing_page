import { dirname, resolve } from "path";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { sync } from "glob";

export const entry = {
    "bundle.js": sync("build/static/?(js|css)/main.*.?(js|css)").map((f) =>
        resolve(dirname, f)
    ),
};
export const output = {
    filename: "build/static/js/bundle.js",
};
export const module = {
    rules: [
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.scss$/,
            use: ["style-loader", "sass-loader"],
        },
    ],
};
export const plugins = [new UglifyJsPlugin(), new HtmlWebpackPlugin()];
