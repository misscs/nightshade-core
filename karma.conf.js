// Karma configuration
// Generated on Fri May 06 2016 13:00:31 GMT-0400 (EDT)

var istanbul = require('browserify-babel-istanbul');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'browserify', 'fixture'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/babel-polyfill/browser.js',
      'src/**/*.test.js',
      'src/**/*.html'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.test.js': ['browserify'],
      'src/**/*.html': ['html2js']
    },

    // Browserify configuration
    // The coverage command goes here instead of the preprocessor because we need it to work with browserify
    browserify: {
      debug: true,
      transform: [
        [
          'babelify',
          {
            presets: 'es2015'
          }
        ], istanbul({
          ignore: ['**/*.test.js']
        })
      ]
    },

    // optionally, configure the reporter
    // text displays it within the console (alternative: text-summary)
    // lcov creates a codecov compatible report
    coverageReporter: {
      reporters: [
        {'type': 'text'},
        {'type': 'html', dir: 'coverage'},
        {'type': 'lcov'}
      ]
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    plugins: [
      'karma-browserify',
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-fixture',
      'karma-html2js-preprocessor',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher'
    ]
  })
}
