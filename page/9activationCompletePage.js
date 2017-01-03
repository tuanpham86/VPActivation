/// <reference path="../typings/globals/angular-protractor/index.d.ts" />

// var protractor = require('protractor');

var activationCompletePage = function () {
    var EC = protractor.ExpectedConditions;
    this.printButton = element(by.buttonText('print confirmation slip'))

    this.clickPrint = function() {
        browser.wait(EC.elementToBeClickable(printButton), 10000); // TODO: set a main timeOut time for all pages
        this.printButton.click();
    };
};

module.exports = new activationCompletePage;