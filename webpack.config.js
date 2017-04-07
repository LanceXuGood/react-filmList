const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ENV = process.env.NODE_ENV = process.env.ENV = 'development';
const isDev = ENV !== 'production';

const vendor = [
    'react',
    'react-dom',
    'redux',
    'react-redux',
    'redux-thunk',
    'react-hot-loader',
    'react-router-dom',
    'history'
];
let getEntry=()=>{
    let entry;
    if(isDev){
        entry = {
            vendor: vendor,
            app: ['react-hot-loader/patch', 'webpack/hot/only-dev-server', 'webpack-dev-server/client?http://localhost:3000', 'babel-polyfill', path.resolve(__dirname, 'src/main.js')]
        };
    }else{
        entry = {
            vendor: vendor,
            app: ['babel-polyfill', path.resolve(__dirname, 'src/main.js')]
        };
    }
    return entry;
};

const getPlugins = () => {
    let plugins = [
        new ExtractTextPlugin({
            filename: '[name].[hash:8].css',
            allChunks: true,
            disable: isDev,   // Disable css extracting on development
            ignoreOrder: true,
        }),

        new HtmlWebpackPlugin({
            title: '',
            hash: true,
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new webpack.DefinePlugin({
            __DEV__: isDev,
            'process.env': {
                'NODE_ENV': JSON.stringify(ENV)
            }
        }),
        new webpack.NoEmitOnErrorsPlugin(),

    ];

    if (isDev) {  // For development
        plugins.push(new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin());
    } else {
        plugins.push( // For production
            new webpack.optimize.CommonsChunkPlugin({name: 'vendor', minChunks: Infinity}),
            new webpack.HashedModuleIdsPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
                beautify: false,
                mangle: {screw_ie8: true},
                compress: {
                    screw_ie8: false,  // React doesn't support IE8
                    warnings: false,
                    unused: true,
                    dead_code: true,
                },
                output: {screw_ie8: true, comments: false},
            })
        );
    }

    return plugins;
};

module.exports = {
    entry: getEntry(),
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        publicPath: ''
    },
    resolve: {
        extensions: ['.web.js', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.jpe?g$|\.gif$|\.png$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'images/[hash:8].[name].[ext]',
                        }
                    }
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.js[x]?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react', ['es2015', {'modules': false}], 'stage-3'],
                            plugins: [
                                'react-hot-loader/babel',
                                'transform-decorators-legacy',
                                'transform-class-properties',
                                ['import', {'libraryName': 'antd', 'style': 'css'}]
                            ]
                        }
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.scss/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: 'inline',
                            }
                        },
                        'sass-loader',
                    ]
                }),
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                use: ExtractTextPlugin.extract([
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: 'inline',
                        }
                    }
                ]),
            }
        ]
    },
    context: __dirname,
    plugins: getPlugins(),
};