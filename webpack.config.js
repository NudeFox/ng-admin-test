var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    autoprefixer = require('autoprefixer'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path');

module.exports = {
    entry: [
        './app/main.js',
        './styles/main.scss',
    ],
    output: {
        path: __dirname + "/docs",
        filename: "main.js",
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel' },
            { test: /\.html$/, loader: 'html' },
            { test: /\.(woff2?|svg|ttf|eot)(\?.*)?$/, loader: 'url' },
            { test: /\.(jpe?g|png|gif)$/i, loaders: [
                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]},
            { test: /\.css$/, loader: ExtractTextPlugin.extract('css') },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass') }
        ],
    },
    postcss: [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ],
    plugins: [
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'),
            inject: true,
            hash: true,
            filename: 'index.html',
        }),
    ],
    devServer: {
        contentBase: './docs',
        stats: {
            modules: false,
            cached: false,
            colors: true,
            chunk: false
        }
    },
    externals: {
        'text-encoding': 'window'
    }
};
