module.exports = function(config){
  config.set({
    // base path to resolve files and exclude
    basePath: '',

    // testing framework
    frameworks: ['jasmine'],

    // list of files
    files: [
      'angular.min.js',
      'angular.mock.js',
      'controller.js',
      'simpleSpec.js','controllerSpec.js'
    ],
    exclude: [],

    //port
    port: 8080,

    // level of logging
    // aviable: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and execute tests whenever any file changes
    autoWatch: true,

    //start these browers, currently aviable:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari
    // - PhantomJS
    // - IE
    browsers: ['Chrome'],

    // continuous integration mod
    // if true, it captures browers, run tests and exits
    singleRun: false


  });
};
