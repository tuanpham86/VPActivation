var protractor = require('protractor');

var numberPortPage = function () {
    var EC = protractor.ExpectedConditions;

    this.title = element(by.cssContainingText('h1','Number Port'));

    this.continueButton = element(by.buttonText('continue'));
    this.cancelButton = element(by.buttonText('cancel'));
    
    //click Continue
    this.clickContinue = function() {
        console.log('number Port:'+EC.elementToBeClickable(this.continueButton, 10000));
        browser.wait(EC.elementToBeClickable(this.continueButton, 10000)); // TODO: set a main timeOut time for all pages
        this.continueButton.click();
    };

    //click Cancel
    this.clickCancel = function() {
        browser.wait(EC.elementToBeClickable(this.cancelButton, 10000));
        this.cancelButton.click();
    };
};

module.exports = new numberPortPage();