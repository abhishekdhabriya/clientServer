var path = require('path'),
    _ = require('lodash'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

const vendor = ['lodash'];


function createConfig(isDevelopment) {

    const devtool = isDevelopment ? 'cheap-module-source-map' : null; // tells how sourcemaps are created. // eval doesn't work well with debugging.

    // -------
    // plugins

    const plugins = [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }), // extracting vendor component and creating vendor.js file.
        new webpack.DefinePlugin({ // define plugin allows us to define javascript variables in the resulting bundle as global variables that we can access.
            'process.env': { // we are asking webpack to create a global javascript object 
                NODE_ENV: `${process.env.NODE_ENV} || 'development'` // a property
            },
            IS_PRODUCTION: !isDevelopment, // by doing this we can now use IS_PRODUCTION in our own code as this will be available as a property of a global object 'process.env'
            IS_DEVELOPMENT: isDevelopment   // can be used in code as process.env.IS_DEVELOPMENT
        }),
        new webpack.ProvidePlugin({ // with provide plugin we can assign a variable which it will watch for in our code and if it isn't define anywhere then webpack will inject the value.
            '$': 'jquery',   // so we can use $ in the module and at compile time webpack will inject jQuery in the module.
            'jQuery': 'jquery'
        })
    ];


    //------------------
    // loaders

    const loaders = {
        js: {
            test: /\.js$/, // need to escape ., ? is optional, so either jsx or js, $ says at the end
            loader: 'babel',
            exclude: /node_modules/
        },
        eslint: {
            test: /\.jsx?$/,
            loader: 'eslint',
            exclude: /NODE_ENV/
        },
        json: {
            test: /\.json$/,
            loader: 'json'
        },
        css: {
            test: /\.css$/,
            loader: 'style!css?sourceMap'  // ! is like and, apply cs loader first and then pipe it through style loader. ? is query string to the loader. asking css loader to enable sourcemaps
        },
        sass: {
            test: /\.scss$/,
            loader: 'style!css?sourceMap!sass?sourceMap'
        },
        files: {
            test: /\.(png|jpg|jpeg|gif|woff|ttf|eot|svg|woff2)/,
            loader: 'url-loader?limit=5000'  // if the file is smaller than 5000 bytes, it will inline the file. like icon files, it will inline into the file. meaning no network request needed.
        }
    };

    const clientEntry = ['./src/client/client.js'];
    let publicPath = '/build'; // let because we will redefine it in certain conditions

    // if (isDevelopment) {

    // } else {

    // }

    return {
        name: 'client',
        devtool,
        entry: {
            app: clientEntry,
            vendor: vendor
        },
        output: {
            path: path.join(__dirname, 'public', 'build'), // __dirnname is the absolute directory we are in, sub folder build under public
            filename: '[name].js', // [name] is template name, refers to the name property above
            publicPath
        },
        resolve: {
            extensions: ["", ".js", ".jsx"], // extensions used in code
            alias: {
                shared: path.join(__dirname, 'src', 'server', 'shared') // so anything in the src/server/shared folder will be accessible from the client under the alias of shared
            }
        },
        module: {
            loaders: _.values(loaders) // _.values returns as an array
        },
        plugins

    };
}

module.exports = createConfig(process.env.NODE_ENV !== 'production'); // this returns the config object
module.exports.create = createConfig; // this exports the createConfig function so that we can create the config object on the fly
// we are doing this because we want to run the webpack from both command line and gulp and we should be able to instantiate a new copy of configuration
// from gulp.