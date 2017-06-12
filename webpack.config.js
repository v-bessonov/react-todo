var webpack = require('webpack');
var path =  require('path');

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals:{
    jquery: 'jQuery'
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery' :  'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules: [__dirname, 'node_modules', './app/components', './app/api'],
    // modulesDirectories:[
    //   'node_modules',
    //   './app/components'
    // ],
    alias: {
      applicationStyles: 'app/styles/app.scss',
      actions: 'app/actions/actions.jsx'
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      },
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/
    },
    {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader",
                options: {
                    includePaths: [path.resolve(__dirname, './node_modules/foundation-sites/scss')]
                }
            }]
        }
  ]
    // rules: [{
    //         test: /\.scss$/,
    //         use: [{
    //             loader: "style-loader"
    //         }, {
    //             loader: "css-loader"
    //         }, {
    //             loader: "sass-loader",
    //             options: {
    //                 includePaths: [path.resolve(__dirname, './node_modules/foundation-sites/dist/scss')]
    //             }
    //         }]
    //     }]
  },
  // sassLoader : {
  //   includePaths: [
  //     path.resolve(__dirname, './node_modules/foundation-sites/dist/scss')
  //   ]
  // },
  //devtool : 'inline-source-map'
  devtool : 'cheap-module-eval-source-map'

};
