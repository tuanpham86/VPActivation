/// <reference path="../typings/globals/angular-protractor/index.d.ts" />

// var protractor = require('protractor');

var verificationConfirmPage = function () {
    var EC = protractor.ExpectedConditions;
    
    this.continueButton = element(by.buttonText('continue'));
    
    //click Continue
    this.clickContinue = function() {
        browser.wait(EC.elementToBeClickable(this.continueButton), 10000); // TODO: set a main timeOut time for all pages
        this.continueButton.click();
    };
};

module.exports = new verificationConfirmPage;