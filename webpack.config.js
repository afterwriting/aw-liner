const path = require('path');

module.exports = {
    entry: {
        index: './index.js'
    },
    output: {
        filename: 'aw-liner.amd.js',
        libraryTarget: "umd",
        library: 'awLiner',
        path: path.resolve(__dirname, 'dist')
    }
};