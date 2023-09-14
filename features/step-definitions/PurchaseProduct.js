const { When, Then, After, Before } = require('@cucumber/cucumber')
const { expect } = require('chai');
const { Builder } = require('selenium-webdriver');
const cucumberHtmlReporter = require('cucumber-html-reporter');
const AmazonPage = require("../pageObjects/AmazonPage")

this.amazonPage;

When('I navigate to the Amazon Url', async () => {
  console.log("When")
  const driver = await new Builder().forBrowser("chrome").build();
  this.amazonPage = new AmazonPage(driver);
  await this.amazonPage.launchUrl();

});


Then('Search the Product', async () => {
  console.log("Then")
  await this.amazonPage.searchProduct();

});


Then('Add the product to the cart', async () => {
  console.log("And")
  await this.amazonPage.addToCart();
  this.driver.sleep(3000);
});

