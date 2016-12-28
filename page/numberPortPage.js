var protractor = require('protractor');

var numberPortPage = function () {

    this.clickContinue = function() {
        element(by.buttonText('continue')).click();
    };
    
    this.clickCancel = function() {
        element(by.buttonText('cancel')).click();
    };
};

module.exports = new numberPortPage();