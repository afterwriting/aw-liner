const path = require('path');

module.exports = {
    entry: {
        index: './index.js'
    },
    output: {
        filename: 'aw-liner.amd.js',
        libraryTarget: "umd",
        library: 'aw-liner',
        path: path.resolve(__dirname, 'dist')
    }
};