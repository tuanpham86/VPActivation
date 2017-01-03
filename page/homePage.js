var protractor = require('protractor');

var homePage = function () {
    var EC = protractor.ExpectedConditions;

    this.title = element(by.cssContainingText('h2','Scan or enter a device\'s IMEI\/ESN and SIM'))

    this.continueButton = element(by.buttonText('continue'));
    this.cancelButton = element(by.buttonText('cancel'));

    this.inputImei = function(imei) {
        element(by.css('input[name="imei"]')).sendKeys(imei);
    };

    this.inputSim = function(sim) {
        element(by.css('input[name="sim"]')).sendKeys(sim);
    };

    this.clickContinue = function() {
        browser.wait(EC.elementToBeClickable(this.continueButton, 10000)); // TODO: set a main timeOut time for all pages
        this.continueButton.click();
    };

    this.clickCancel = function() {
        browser.wait(EC.elementToBeClickable(this.cancelButton, 10000));
        this.cancelButton.click();
    };
    
};

module.exports = new homePage();