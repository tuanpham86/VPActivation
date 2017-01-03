/// <reference path="../typings/globals/protractor/index.d.ts" />

var homePage = require('../page/1homePage.js');
var identityValidationPage = require('../page/2identityValidationPage.js');
var numberPortPage = require('../page/3numberPortPage.js');
var planPage = require('../page/4planPage.js');
var orderReviewPage = require('../page/5orderReviewPage.js');
var mobileScanSheetPage = require('../page/6mobileScanSheetPage.js');
var verificationPage = require('../page/7verificationPage.js');
var verificationConfirmPage = require('../page/8verificationConfirmPage.js');
var activationCompletePage = require('../page/9activationCompletePage.js');
//require ('../waitReady.js');


describe('VZW Prepaid Activation e2e', function () {

    var EC = protractor.ExpectedConditions;
    // var url = 'http://verizonprepaid-qa.khhpq2nhzi.us-east-1.elasticbeanstalk.com/#/scan/003/11/123456298';
    var wTime = 20000; // 10 seconds

    beforeEach(function () {
        var width = 1600;
        var height = 1000;
        browser.driver.manage().window().setSize(width, height);
        browser.ignoreSynchronization = true;
    });

    // afterEach(function() {
    //     browser.executeScript('window.sessionStorage.clear();');
    //     browser.executeScript('window.localStorage.clear();');
    // });

    it('should navigate to home page', function () {
        browser.get('#/scan/003/11/123456298', 10000);
        expect(browser.getTitle()).toBe('VZW Prepaid Activation');

        // Waits for the URL to contain 'foo'.
        browser.wait(EC.urlContains('#/scan'), wTime);
        browser.wait(EC.visibilityOf(element(by.cssContainingText('h2','Scan or enter a device\'s IMEI\/ESN and SIM')), wTime));
        // clear localStorage
        // browser.executeScript('window.sessionStorage.clear();');
        // browser.executeScript('window.localStorage.clear();');
    });

    it('should navigate to Identity Validation page', function () {
        // browser.sleep(2000);
        homePage.inputImei(354392060171496);
        homePage.inputSim('89148000003111553314');
        homePage.clickContinue();
        browser.wait(EC.urlContains('#/guest-identity-validation'), wTime);
        browser.wait(EC.visibilityOf(element(by.cssContainingText('h1','Guest Identity Validation Page')), wTime));
    });

    it('should navigate to port Number page', function () {
        // browser.sleep(2000);
        identityValidationPage.inputFirstName('Peter');
        identityValidationPage.inputLastName('Parker');
        identityValidationPage.inputAddress1('2139 W 44th Ave');
        identityValidationPage.inputCity('Denver');
        identityValidationPage.inputState('Colorado');

        identityValidationPage.inputZipCode('80211');
        identityValidationPage.inputHomePhone(7205022105);
        identityValidationPage.inputEmail('test@test.test'); //no rules
        identityValidationPage.clickContinue();
        browser.sleep(5000);
        // browser.wait(EC.urlContains('#/number-port'), wTime);
        // browser.wait(EC.visibilityOf(element(by.cssContainingText('h1','Number Port')), wTime));

        // TODO: Verifiy Name/Address
        // expect(element(by.css('h3 a')).getText()).toContain('abc');
        // TODO: select YES?
        // Input number
        // Account Number

        // TODO: use exsiting <> use new address
        // Input new address
    });

    it('should navigate to plan page', function () {
        // console.log('date: ' + new Date()); 
        // console.log('e2e: '+ EC.visibilityOf(element(by.cssContainingText('h1','Number Port')), 5000));  
        // browser.wait(EC.visibilityOf(element(by.cssContainingText('h1','Number Port')), 5000));

        browser.wait(EC.visibilityOf(element(by.cssContainingText('h1','Number Port')), 5000)).then(function(){
            numberPortPage.clickContinue();
        });
        // numberPortPage.clickContinue();

        // browser.sleep(10000);
        browser.wait(EC.urlContains('#/plan'), wTime);
        
        // browser.sleep(10000);
        // check number of available plans
        browser.wait(EC.visibilityOf(element(by.cssContainingText('h1','Select Your Plan')), wTime)).then(function(){
            planPage.countOfPlans().then(function(size) {
                expect(size).toBe(5);
            });
        });         
    });

    it('can select a plan - go to confirm page', function () {
        // click select a plan
        planPage.clickOnPlan(1);
        browser.sleep(5000);
        browser.wait(EC.urlContains('#/order-confirm'), wTime);
        
        //TODO: edit plan
        // select different plan
    });

    // Order-confirm
    it('can confirm correct order', function () {
        orderReviewPage.clickContinue();
        browser.sleep(5000);
        browser.wait(EC.urlContains('#/printmss'), wTime);

        // TODO: Verifiy Price
    });

    // Print Mobile Scan Sheet
    it('should goes to verification page', function () {
        mobileScanSheetPage.clickContinue();
        browser.sleep(5000);
        browser.wait(EC.urlContains('#/verification'), wTime);
        //TODO: input receipt ID: 9881794110024562 (calculated?)

        // Portin: only available if select a Port
    });

    it('should goes to verification Confirm page', function () {
        verificationPage.inputReceiptID(9881794110024562);
        verificationPage.clickSubmit();
        // browser.sleep(5000);
        browser.wait(EC.urlContains('#/verification-confirm'), wTime);
        //TODO: input receipt ID: 9881794110024562 (calculated?)

        // Portin: only available if select a Port
    });

    
    it('should goes to activation Complete page', function () {

        verificationConfirmPage.clickContinue();
        // browser.sleep(5000);
        browser.wait(EC.urlContains('#/activation-complete'), wTime);
        //TODO: input receipt ID: 9881794110024562 (calculated?)

        // Portin: only available if select a Port
    });
    
    it('should goes to activation Complete page', function () {
        // browser.sleep(5000);
        
        //TODO: input receipt ID: 9881794110024562 (calculated?)
        browser.wait(EC.visibilityOf(element(by.cssContainingText('h1','Order and Activation Complete')), wTime));
        // Portin: only available if select a Port
    });
    
});