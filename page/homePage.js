var protractor = require('protractor');

var homePage = function () {

    this.inputImei = function(imei) {
        element(by.css('input[name="imei"]')).sendKeys(imei);
    };

    this.inputSim = function(sim) {
        element(by.css('input[name="sim"]')).sendKeys(sim);
    };

    this.clickContinue = function() {
        element(by.buttonText('continue')).click();
    };
    
    this.clickCancel = function() {
        element(by.buttonText('cancel')).click();
    };
};

module.exports = new homePage();