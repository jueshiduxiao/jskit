var path = require('path');

module.exports = {
    entry: {
        app: path.resolve('./src/index.js')
    },
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js'
    },
    externals: {
        Yoga: 'Yoga'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
                
            }
        ]
    },
    devtool: 'source-map'
};
