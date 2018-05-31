const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const env = process.env.NODE_ENV;
const paths = require('../../paths');

function entry() {
    return {
        main: paths.EXPERIENSA_ASSETS + '/scripts/main.js',
        admin: paths.EXPERIENSA_ASSETS + '/scripts/admin.js',
        catalog: paths.EXPERIENSA_ASSETS + '/scripts/modules/catalog/index.jsx',
        extracatalog: paths.EXPERIENSA_ASSETS + '/scripts/modules/extracatalog/index.jsx',
        showcase: paths.EXPERIENSA_ASSETS + '/scripts/modules/showcase/index.jsx',
        request: paths.EXPERIENSA_ASSETS + '/scripts/modules/request/index.jsx',
        common: [
            'jquery'
        ],
        react: [
            'lodash',
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'react-router-redux',
            'redux'
        ]
    }
}
function output() {
    return {
        filename: '[name].js',
        path: paths.EXPERIENSA_DIST
    }
}
function rules(){
    return [
        {
            test: /\.js$/,
            exclude: [paths.NODEMOUDLES_PATH],
            use: [
                {
                    loader: 'babel-loader'
                }
            ]
        },
        {
            test: /\.jsx?$/,
            exclude: [paths.NODEMOUDLES_PATH],
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: ['es2015', 'react', 'stage-2'],
                        plugins: ['transform-decorators-legacy']
                    }
                }
            ]
        },
        {
            test: /.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader']
            })
        },
        {
            test: /\.(png|jpg)$/,
            use:[
                {
                    loader: 'url-loader',
                    options: {
                        limit: 100000
                    }
                }
            ]
        },
        {
            test: /\.(ttf|eot|woff2?|png|jpe?g|gif|svg)$/,
            include: path.resolve(paths.EXPERIENSA_ASSETS),
            loader: 'file-loader',
            options: {
                name: `vendor/[name].[ext]`,
            },
        },
        {
            test: /\.(ttf|eot|woff2?|png|jpe?g|gif|svg)$/,
            include: /node_modules|bower_components/,
            loader: 'file-loader',
            options: {
                name: `vendor/[name].[ext]`,
            },
        },
    ]
}
function plugins() {
    return [
        new CleanWebpackPlugin(['dist'], {
            root: paths.EXPERIENSA_ROOT,
            verbose: false,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['common', 'react'],
            minChunks: Infinity
        }),
        new ExtractTextPlugin({
            filename: 'main.css',
            disable: false,
            allChunks: true
        }),
        // new webpack.LoaderOptionsPlugin({
        //     minimize: true,
        //     debug: false
        // }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.ProvidePlugin({
            $: "jquery"
        })
    ]
}
let myPlugins = plugins();

let devtool = 'hidden-sourcemap';
if(env === 'development'){
    let devtool = 'cheap-module-eval-source-map'; 
    myPlugins = myPlugins.concat([
        new webpack.LoaderOptionsPlugin({
           minimize: false,
           debug: true
       }),
       new webpack.optimize.UglifyJsPlugin({
           output: {
               comments: true,
           },
           sourceMap: true
       }),
   ]);
}else{
    myPlugins = myPlugins.concat([
         new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,
            },
            sourceMap: false
        }),
    ]);
}
const webpackConfig = {
    devtool: devtool,
    entry: entry(),
    output: output(),
    module: {
        rules: rules()
    },
    plugins: myPlugins,
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            paths.NODEMOUDLES_PATH,
            paths.EXPERIENSA_ASSETS + '/scripts/modules/catalog',
            paths.EXPERIENSA_DIST
        ]
    }
};

// console.log(env)
module.exports = webpackConfig;