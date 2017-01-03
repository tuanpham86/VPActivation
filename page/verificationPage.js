/// <reference path="../typings/globals/angular-protractor/index.d.ts" />

var protractor = require('protractor');

var verificationPage = function () {
    var EC = protractor.ExpectedConditions;
    
    this.submitButton = element(by.buttonText('submit'));
    
    this.inputReceiptID = function(receiptID){
        element(by.css('input[name="receiptID"]')).sendKeys(receiptID);
    }

    this.clickSubmit = function() {
        browser.wait(EC.elementToBeClickable(this.submitButton, 10000)); // TODO: set a main timeOut time for all pages
        this.submitButton.click();
    };

    //click Continue
    // this.clickContinue = function() {
    //     browser.wait(EC.elementToBeClickable(this.continueButton, 10000)); 
    //     this.continueButton.click();
    // };

    // //click Cancel
    // this.clickCancel = function() {
    //     browser.wait(EC.elementToBeClickable(this.cancelButton, 10000));
    //     this.cancelButton.click();
    // };
};

module.exports = new verificationPage;