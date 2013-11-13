// Karma configuration
module.exports = function (config) {
    'use strict';
    config.set({

        // Base path, that will be used to resolve files and exclude
        basePath: '../',

        // Frameworks to use
        frameworks: ['mocha'],

        // List of files / patterns to load in the browser
        files: [
            // Application vendors
            'web/vendor/js/*.js',

            // Testing resources
            'node_modules/chai/chai.js',
            'buildtools/karma/*.js',

            // The actual application files
            'angular/app/**/*.js',

            // And finally the tests
            'angular/tests/**/*.js'
        ],

        // List of files to exclude
        exclude: [
            // Don't include the minified vendors
            'web/vendor/js/*.min.js'
        ],

        // Test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress'],

        // Web server port
        port: 9876,

        // Enable / disable colors in the output (reporters and logs)
        colors: true,

        // Level of logging
        // Possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // Enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: [],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};