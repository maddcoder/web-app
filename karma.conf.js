var webpackConfig = require('./webpack.test')

// Reference: http://karma-runner.github.io/0.12/config/configuration-file.html
module.exports = function karmaConfig (config) {
  config.set({

    frameworks: [
      // Reference: https://github.com/karma-runner/karma-mocha
      // Set framework to mocha
      'mocha'
    ],

    reporters: [
      // Reference: https://github.com/mlex/karma-spec-reporter
      // Set reporter to print detailed results to console
      'spec'
    ],

    files: [
      // Reference: https://www.npmjs.com/package/phantomjs-polyfill
      // Needed because React.js requires bind and phantomjs does not support it
      'node_modules/phantomjs-polyfill/bind-polyfill.js',

      // Grab all files in the app folder that end with .test.js or .test.jsx
      'app/**/*.test.(js|jsx)'
    ],

    preprocessors: {
      // Reference: http://webpack.github.io/docs/testing.html
      // Reference: https://github.com/webpack/karma-webpack
      // Convert files with webpack and load sourcemaps
      'app/**/*.test.(js|jsx)': ['webpack', 'sourcemap']
    },

    browsers: [
      // Run tests using PhantomJS
      'PhantomJS'
    ],

    singleRun: true,

    plugins: [
      require('karma-mocha'),
      require('karma-webpack'),
      require('karma-spec-reporter'),
      require('karma-sourcemap-loader'),
      require('karma-phantomjs-launcher')
    ],

    webpack: webpackConfig
  })
}
