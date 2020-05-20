const webpack = require('webpack');
const serverlessWebpack = require('serverless-webpack');
const path = require('path');

const config = {
    mode: 'none',
    entry: serverlessWebpack.lib.entries,
    target: 'node',
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js',
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
		devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
    }
};

module.exports = config;