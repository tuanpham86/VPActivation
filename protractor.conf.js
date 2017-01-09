// var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

// var reporter = new HtmlScreenshotReporter({
//     dest: 'screenshots',
//     filename: 'my-report.html'
//     //pathBuilder: function (currentSpec, suites, browserCapabilities) {
//         // will return chrome/your-spec-name.png
//     //    return browserCapabilities.get('browserName') + '/' + currentSpec.fullName;
//     //}
// });

// A reference configuration file.
exports.config = {
    // ----- How to setup Selenium -----
    //
    // There are three ways to specify how to use Selenium. Specify one of the
    // following:
    //
    // 1. seleniumServerJar - to start Selenium Standalone locally.
    // 2. seleniumAddress - to connect to a Selenium server which is already
    //    running.
    // 3. sauceUser/sauceKey - to use remote Selenium servers via SauceLabs.

	// seleniumAddress: 'http://localhost:4444/wd/hub',	
    // The location of the selenium standalone server .jar file.
    seleniumServerJar: 'node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar',
    // The port to start the selenium server on, or null if the server should
    // find its own unused port.
    seleniumPort: null,
    // Chromedriver location is used to help the selenium standalone server
    // find chromedriver. This will be passed to the selenium jar as
    // the system property webdriver.chrome.driver. If null, selenium will
    // attempt to find chromedriver using PATH.
    chromeDriver: 'node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.26',
    // Additional command line options to pass to selenium. For example,
    // if you need to change the browser timeout, use
    // seleniumArgs: ['-browserTimeout=60'],
    seleniumArgs: [],

    // If sauceUser and sauceKey are specified, seleniumServerJar will be ignored.
    // The tests will be run remotely using SauceLabs.
    sauceUser: null,
    sauceKey: null,

    // ----- What tests to run -----
    //
    // Spec patterns are relative to the location of this config.
    specs: [
    './specs/*.js'
    ],

    // ----- Capabilities to be passed to the webdriver instance ----
    //
    // For a full list of available capabilities, see
    // https://code.google.com/p/selenium/wiki/DesiredCapabilities
    // and
    // https://code.google.com/p/selenium/source/browse/javascript/webdriver/capabilities.js
    capabilities: {
        'browserName': 'chrome'
    },
	
	// directConnect: true,
	  /**
	   * Path to the firefox application binary. If null, will attempt to find
	   * firefox in the default locations.
	   */
	
	// firefoxPath: 'D:\Program Files\Mozilla Firefox',
	
	// multiCapabilities: [{
	//   'browserName': 'firefox'
	// }, {
	//   'browserName': 'chrome'
	// }],

    // A base URL for your application under test. Calls to protractor.get()
    // with relative paths will be prepended with this.
    baseUrl: 'http://verizonprepaid-qa.khhpq2nhzi.us-east-1.elasticbeanstalk.com/',

    // Selector for the element housing the angular app - this defaults to
    // body, but is necessary if ng-app is on a descendant of

    rootElement: 'app',

    useAllAngular2AppRoots: true,

    // Setup the report before any tests start
    // beforeLaunch: function () {
    //     return new Promise(function (resolve) {
    //         reporter.beforeLaunch(resolve);
    //     });
    // },

    // Assign the test reporter to each running instance
    onPrepare: function () {
        // jasmine.getEnv().addReporter(reporter);
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: './reports',
                screenshotsFolder: 'screenshots',
                takeScreenshots: true
                // takeScreenshotsOnlyOnFailures: true
            })
        );
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: false,
                displayDuration: true
            },
            summary: {
                displayStacktrace: false
            }
        }));
        // require('./waitReady.js');
        browser.manage().deleteAllCookies();
        // jasmine-fail-fast
        // var failFast = require('jasmine-fail-fast');
        // jasmine.getEnv().addReporter(failFast.init());
        
    },

    // Close the report after all tests finish
    // afterLaunch: function (exitCode) {
    //     return new Promise(function (resolve) {
    //         reporter.afterLaunch(resolve.bind(this, exitCode));
    //     });
    // },


    // ----- Options to be passed to minijasminenode -----
    jasmineNodeOpts: {
        // onComplete will be called just before the driver quits.
        onComplete: null,
        // If true, display spec names.
        isVerbose: true,
        // If true, print colors to the terminal.
        showColors: true,
        // If true, include stack traces in failures.
        includeStackTrace: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 40000,
        // show errors in a real time
        // realtimeFailure: true
        print: function() {}
    },
};