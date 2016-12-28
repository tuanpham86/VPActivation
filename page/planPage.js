/// <reference path="../typings/globals/angular-protractor/index.d.ts" />

var protractor = require('protractor');

var planPage = function () {
    //count of plans
    this.countOfPlans = function() {
        return element.all(by.buttonText('select plan')).count();
    };

    //select a Plan (click on plan nth)
    this.clickOnPlan = function(num) {
        var allPlans = element.all(by.buttonText('select plan'));
        allPlans.count().then(function (count) {
            var planName = allPlans.get(num);
            planName.click();
        });
        // var allPlans = element.all(by.css('select plan')).then(function() {
        //     allPlans.get(num).click();
        // });        
    };

    this.clickContinue = function() {
        element(by.buttonText('continue')).click();
    };
    
    this.clickCancel = function() {
        element(by.buttonText('cancel')).click();
    };
};

module.exports = new planPage;