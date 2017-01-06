/// <reference path="../typings/globals/angular-protractor/index.d.ts" />

// var protractor = require('protractor');

var planPage = function () {
    var EC = protractor.ExpectedConditions;
    
    this.continueButton = element(by.buttonText('continue'));
    this.cancelButton = element(by.buttonText('cancel'));
    
    // count of plans
    this.countOfPlans = function() {
        browser.wait(EC.elementToBeClickable(element.all(by.buttonText('select plan')), 10000));
        return element.all(by.buttonText('select plan')).count();
    };

    // select a Plan (click on plan nth)
    this.clickOnPlan = function(num) {
        var planName = element.all(by.buttonText('select plan')).get(num);
        

        browser.wait(EC.elementToBeClickable(planName, 10000)).then(function() {
            var planPrice = element.all(by.css('div.carrierInfoMid > h3')).get(num).getText();
            browser.manage().addCookie("price", planPrice, '/').then(function() {
                planName.click();
            });
            // console.log('Selected plan: '+ planName.getText() + ' and plan Price = ' + planPrice);  
        });
    };

    //click Continue
    this.clickContinue = function() {
        browser.wait(EC.elementToBeClickable(this.continueButton), 10000).then(function() { // TODO: set a main timeOut time for all pages
            this.continueButton.click();
            // element(by.buttonText('continue')).click();
        });
    };

    //click Cancel
    this.clickCancel = function() {
        browser.wait(EC.elementToBeClickable(this.cancelButton), 10000);
        this.cancelButton.click();
    };
};

module.exports = new planPage;