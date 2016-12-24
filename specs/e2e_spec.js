var homePage = require('../page/homePage.js');
var identityValidationPage = require('../page/identityValidationPage.js');
var numberPortPage = require('../page/numberPortPage.js');
var planPage = require('../page/planPage.js');

describe('VZW Prepaid Activation e2e', function () {

    var EC = protractor.ExpectedConditions;

    beforeEach(function () {
        var width = 1280;
        var height = 800;
        browser.driver.manage().window().setSize(width, height);
        //browser.waitForAngular();
        browser.ignoreSynchronization = true;
    });

    it('should navigate to home page', function () {
        browser.get('http://verizonprepaid-qa.khhpq2nhzi.us-east-1.elasticbeanstalk.com/#/scan/003/11/123456298');
        expect(browser.getTitle()).toBe('VZW Prepaid Activation');
        
        // Waits for the URL to contain 'foo'.
        browser.wait(EC.urlContains('#/scan'), 5000);
        //expect(browser.getCurrentUrl()).toContains('#/scan')
    });

    it('should navigate to identity Validation page', function () {
        browser.sleep(2000);
        homePage.inputImei(354392060653964);
        homePage.inputSim(89148000003111553314);
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
        browser.sleep(2000);
        browser.wait(EC.urlContains('#/number-port'), 5000);
    });

    it('should navigate to plan page', function () {
        browser.sleep(2000);

        numberPortPage.clickContinue();
        browser.sleep(3000);
        browser.wait(EC.urlContains('#/plan'), 5000);
    });
});