/// <reference path="../typings/globals/angular-protractor/index.d.ts" />

var protractor = require('protractor');

var verificationPage = function () {
    //Product details


    this.clickContinue = function() {
        element(by.buttonText('continue')).click();
    };
    
    this.clickCancel = function() {
        element(by.buttonText('cancel')).click();
    };
};

module.exports = new verificationPage;