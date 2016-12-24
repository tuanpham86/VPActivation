var protractor = require('protractor');

var numberPortPage = function () {

    this.clickContinue = function() {
        element(by.buttonText('Continue')).click();
    };
    
    this.clickCancel = function() {
        element(by.buttonText('Cancel')).click();
    };
};

module.exports = new numberPortPage();