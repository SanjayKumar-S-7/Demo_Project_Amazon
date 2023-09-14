const { When, Then, After, Before, BeforeAll, AfterAll } = require('@cucumber/cucumber')
const { expect } = require('chai');
const { Builder } = require('selenium-webdriver');
const cucumberHtmlReporter = require('cucumber-html-reporter');
const AmazonPage = require("../pageObjects/AmazonPage")




this.amazonPage;


When('I navigate to the Amazon Application', async () => {
    console.log("When")
    const driver = await new Builder().forBrowser("chrome").build();
    this.amazonPage = new AmazonPage(driver);
    await this.amazonPage.launchUrl();

});


Then('Enter the credentials', async () => {
    console.log("Then")
    await this.amazonPage.login();
    this.driver.sleep(3000);
    
});

