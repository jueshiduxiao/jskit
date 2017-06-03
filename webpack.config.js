var path = require('path');

module.exports = {
    entry: {
        app: path.resolve('./src/index.js')
    },
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [/*
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }*/
        ]
    },
    devtool: 'source-map'
};
