// var protractor = require('protractor');

var numberPortPage = function () {
    var EC = protractor.ExpectedConditions;

    this.title = element(by.cssContainingText('h1','Number Port'));

    this.continueButton = element(by.buttonText('continue'));
    this.cancelButton = element(by.buttonText('cancel'));
    
    //click Continue
    this.clickContinue = function() {
        browser.wait(EC.elementToBeClickable(this.continueButton), 10000, 'Cannot find continue button on numberPort Page').then(function() { // TODO: set a main timeOut time for all pages
            // this.continueButton.click();
            element(by.buttonText('continue')).click();
            // continueButton.click();
        });
    };

    //click Cancel
    this.clickCancel = function() {
        browser.wait(EC.elementToBeClickable(cancelButton), 10000, 'Cannot find cancel button on numberPort Page').then(function() {
            this.cancelButton.click();
        });
    };
};

module.exports = new numberPortPage();