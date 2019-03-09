/// <binding BeforeBuild='Run - Development' />
'use strict';

var glob_entries = require('webpack-glob-folder-entries');

module.exports = [
    {
        devtool: 'source-map',

        mode: 'development',

        entry: glob_entries('./Shared/Components/*.ts'),

        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true
                    }
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js']
        },
        output: {
            filename: '../wwwroot/js/[name].bundle.js',
            sourceMapFilename: '../wwwroot/js/[name].bundle.js.map'
        }
    }
];
