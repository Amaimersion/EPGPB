const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveFilesWebpackPlugin = require('remove-files-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const OUTPUT_DIR = path.resolve(__dirname, '..', '..');
const OUTPUT_FOLDER = path.resolve(OUTPUT_DIR, 'dist');


module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src/build/index.js')
    },
    output: {
        path: OUTPUT_FOLDER
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new RemoveFilesWebpackPlugin({
            before: {
                root: OUTPUT_DIR,
                include: [OUTPUT_FOLDER]
            }
        }),
        new CopyWebpackPlugin([
            path.resolve(__dirname, 'src/static')
        ]),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './src/pug/index.pug'),
            inject: false
        })
    ],
    resolve: {
        alias: {
            '@pug': path.resolve(__dirname, 'src', 'pug'),
            '@scss': path.resolve(__dirname, 'src', 'scss'),
            '@ts': path.resolve(__dirname, 'src', 'ts')
        },
        extensions: [
            '.ts', '.tsx', '.d.ts',
            '.js', '.jsx',
            '.json',
            '.scss',
            '.pug'
        ]
    },
    externals: {
        /* Direct import. */

        'react': 'React',
        'react-dom': 'ReactDOM',
    }
};
