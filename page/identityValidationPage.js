var protractor = require('protractor');

var identityValidationPage = function () {
    var EC = protractor.ExpectedConditions;

    this.continueButton = element(by.buttonText('continue'));
    this.cancelButton = element(by.buttonText('cancel'));

    //title
    this.title = element(by.cssContainingText('h1','Guest Identity Validation Page'))

    //firstName
    this.inputFirstName = function(firstName) {
        element(by.css('input[name="firstName"]')).sendKeys(firstName);
    };

    //lastName
    this.inputLastName = function(lastName) {
        element(by.css('input[name="lastName"]')).sendKeys(lastName);
    };

    //address1
    this.inputAddress1 = function(address1) {
        element(by.css('input[name="address1"]')).sendKeys(address1);
    };

    //city
    this.inputCity = function(city) {
        element(by.css('input[name="city"]')).sendKeys(city);
    };

    //state
    this.inputState = function(state) {
        //First click on Drop:
        element(by.css('div[tabindex="0"]')).click().then(function(){
        //second move mouse to particular value in list
            browser.actions().mouseMove(element(by.cssContainingText('div[name="state"]', state))).click().perform();
        });
    };

    //zipCode
    this.inputZipCode = function(zipCode) {
        element(by.css('input[name="zipCode"]')).sendKeys(zipCode);
    };
    
    //homePhone
    this.inputHomePhone = function(homePhone) {
        element(by.css('input[name="homePhone"]')).sendKeys(homePhone);
    };

    //email
    this.inputEmail = function(email) {
        //this.inputField('input[name="email"]', email);
        element(by.css('input[name="email"]')).sendKeys(email);
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

module.exports = new identityValidationPage();
