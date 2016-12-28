/// <reference path="../typings/globals/angular-protractor/index.d.ts" />

var homePage = require('../page/homePage.js');
var identityValidationPage = require('../page/identityValidationPage.js');
var numberPortPage = require('../page/numberPortPage.js');
var planPage = require('../page/planPage.js');

describe('VZW Prepaid Activation e2e', function () {

    var EC = protractor.ExpectedConditions;

    beforeEach(function () {
        var width = 1600;
        var height = 1000;
        browser.driver.manage().window().setSize(width, height);
        browser.ignoreSynchronization = true;
    });

    it('should navigate to home page', function () {
        browser.get('http://verizonprepaid-qa.khhpq2nhzi.us-east-1.elasticbeanstalk.com/#/scan/003/11/123456298');
        expect(browser.getTitle()).toBe('VZW Prepaid Activation');

        // Waits for the URL to contain 'foo'.
        browser.wait(EC.urlContains('#/scan'), 5000);
    });

    it('should navigate to identity Validation page', function () {
        browser.sleep(2000);

        homePage.inputImei(354392060171496);
        homePage.inputSim('89148000003111553314');
        homePage.clickContinue();
        browser.wait(EC.urlContains('#/guest-identity-validation'), 5000);
    });

    it('should navigate to port Number page', function () {
        browser.sleep(3000);
        identityValidationPage.inputFirstName('Peter');
        identityValidationPage.inputLastName('Parker');
        identityValidationPage.inputAddress1('2139 W 44th Ave');
        identityValidationPage.inputCity('Denver');
        identityValidationPage.inputState('Colorado');

        identityValidationPage.inputZipCode('80211');
        identityValidationPage.inputHomePhone(7205022105);
        identityValidationPage.inputEmail('test@test.test');
        identityValidationPage.clickContinue();
        browser.sleep(5000);
        //browser.wait(EC.urlContains('#/number-port'), 5000);     
    });

    it('should navigate to plan page', function () {
        browser.wait(EC.visibilityOf(element(by.cssContainingText('h1','Number Port')), 3000));
        numberPortPage.clickContinue();
        browser.sleep(10000);
        browser.wait(EC.urlContains('#/plan'), 5000);
        browser.wait(EC.visibilityOf(element(by.cssContainingText('h1','Select Your Plan')), 5000));
        //check number of available plans         
        planPage.countOfPlans().then(function(size) {
            expect(size).toBe(5);
        });

        //click select a plan
        planPage.clickOnPlan(1);
        browser.sleep(5000);
        browser.wait(EC.urlContains('#/order-confirm'), 5000);
    });
});