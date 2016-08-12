/* global module */
module.exports = function (config) {
  'use strict';
  config.set({
    basePath: '.',
    autoWatch: true,
    singleRun: true,
    colors: true,
    logLevel: config.LOG_INFO,

    files: [ 'jspm_packages/system-polyfills.js'],

    frameworks: ['jspm', 'jasmine'],

    jspm: {
      config: 'config.js',
      loadFiles: ['app/**/*-spec.js'],
      serveFiles: ['app/**/*!(-spec).js'],
      packages: 'jspm_packages'
    },

    proxies: {
      '/app/': '/base/app/',
      '/jspm_packages': '/base/jspm_packages/'
    },

    browsers: ['PhantomJS'],

    preprocessors: {
      'app/**/*-spec.js': ['babel', 'sourcemap', 'coverage']
    },

    reporters: ['progress'],

    plugins: [
      'karma-babel-preprocessor',
      'karma-sourcemap-loader',
      'karma-jasmine',
      'karma-coverage',
      'karma-jspm',
      'karma-phantomjs-launcher'
    ]
  });
};
