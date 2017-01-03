/// <reference path="../typings/globals/angular-protractor/index.d.ts" />

var protractor = require('protractor');

var activationCompletePage = function () {
    var EC = protractor.ExpectedConditions;
    
    this.clickPrint = function() {
        element(by.buttonText('ticketwrapper')).click();
    };
};

module.exports = new activationCompletePage;