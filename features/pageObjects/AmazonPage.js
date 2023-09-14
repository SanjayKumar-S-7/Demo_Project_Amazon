const { By, Key, until } = require('selenium-webdriver');

class AmazonPage {
    constructor(driver) {
        this.driver = driver;
    }
    async launchUrl() {
        this.driver.sleep(3000);
        await this.driver.get("https://www.amazon.in");
        this.driver.sleep(10000);
    }

    async searchProduct() {
        const searchField = await this.driver.findElement(By.xpath("//input[@name='field-keywords']"));
        searchField.click();
        searchField.sendKeys("Samsung Mobiles S20");
        await this.driver.findElement(By.xpath("//input[@id='nav-search-submit-button']")).click();

    }


    async login() {
        await this.driver.findElement(By.xpath("//a[@id='nav-link-accountList']")).click();
        const emailField = await this.driver.findElement(By.xpath("//input[@type='email']"));
        emailField.click();
        emailField.sendKeys("hello@gmail.com")

        await this.driver.findElement(By.id("continue")).click()

        const Pwd = await this.driver.findElement(By.xpath("//input[@type='password']"));
        Pwd.click();
        Pwd.sendKeys("abcdefgh");
        await this.driver.findElement(By.xpath("//input[@id='signInSubmit']")).click()


    }

    async addToCart() {
        this.driver.sleep(3000);
        const elements = await this.driver.findElements(By.xpath("//div[contains(@class, 's-card-container s-overflow-hidden aok-relative')]/div[@class='a-section']"));

        for (const element of elements) {
            const text = await element.getText();
            console.log(text.trim());
            if (text.includes("S20")) {
                await element.click();
                break;
            }
        }

    }
}
module.exports = AmazonPage;
