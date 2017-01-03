/// <reference path="../typings/globals/angular-protractor/index.d.ts" />

var protractor = require('protractor');

var mobileScanSheetPage = function () {
    var EC = protractor.ExpectedConditions;

    this.continueButton = element(by.buttonText('continue'));
    this.cancelButton = element(by.buttonText('cancel'));

    //Product details


    //click Continue
    this.clickContinue = function() {
        browser.wait(EC.elementToBeClickable(this.continueButton, 10000)); // TODO: set a main timeOut time for all pages
        this.continueButton.click();
    };

    //click Cancel
    this.clickCancel = function() {
        browser.wait(EC.elementToBeClickable(this.cancelButton, 10000));
        this.cancelButton.click();
    };
};

module.exports = new mobileScanSheetPage;