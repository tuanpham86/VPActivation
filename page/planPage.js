/// <reference path="../typings/globals/angular-protractor/index.d.ts" />

var protractor = require('protractor');

var planPage = function () {
    var EC = protractor.ExpectedConditions;
    
    this.continueButton = element(by.buttonText('continue'));
    this.cancelButton = element(by.buttonText('cancel'));
    
    //count of plans
    this.countOfPlans = function() {
        browser.wait(EC.elementToBeClickable(element.all(by.buttonText('select plan')), 10000));
        return element.all(by.buttonText('select plan')).count();
    };

    //select a Plan (click on plan nth)
    this.clickOnPlan = function(num) {
        var allPlans = element.all(by.buttonText('select plan'));
        allPlans.count().then(function () {
            var planName = allPlans.get(num);
            browser.wait(EC.elementToBeClickable(planName, 10000));
            planName.click();
        });
        // var allPlans = element.all(by.css('select plan')).then(function() {
        //     allPlans.get(num).click();
        // });        
    };

    //click Continue
    this.clickContinue = function() {
        browser.wait(EC.elementToBeClickable(this.continueButton, 10000)); // TODO: set a main timeOut time for all pages
        this.continueButton.click();
    };

    //click Cancel
    this.clickCancel = function() {
        browser.wait(EC.elementToBeClickable(this.cancelButton, 10000));
        this.cancelButton.click();
    };
};

module.exports = new planPage;