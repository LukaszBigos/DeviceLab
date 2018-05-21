const path = require('path');

module.exports = {
    entry: {
        app: './client/src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: [/node_modules/, /server/], 
            loader: 'babel-loader',
            query: {
                presets: ['env']
            }
        }]
    }
}