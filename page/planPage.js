/// <reference path="../typings/globals/angular-protractor/index.d.ts" />

var protractor = require('protractor');

var numberPortPage = function () {
    //count of plans
    this.countOfPlans = function(cb) {
        return  element.all(by.buttonText('select plan')).count();
    };

    //select a Plan (click on plan nth)
    this.clickOnPlan = function(num) {
        var plan = element.all(by.buttonText('select plan')).then(function(n) {
            plan[n].click();
        });
    };

    this.clickContinue = function() {
        element(by.buttonText('Continue')).click();
    };
    
    this.clickCancel = function() {
        element(by.buttonText('Cancel')).click();
    };
};

module.exports = new numberPortPage();