const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// defines asynchronous JavaScript function. Async is used to indicate that this function contains asynchronous operations. 
async function runTest() {
    // set up chrome options
    let chromeOptions = new chrome.Options();
    chromeOptions.addArguments('--headless'); // headless mode, meaning it will run without a visible user interface

    // launch chrome browser, method specifies that the test will run on chrome, await is used because build() returns a promise and await ensures that the program waits for the promise to resolve before proceeding.
    let driver = await new Builder(). forBrowser('chrome').setChromeOptions(chromeOptions).build();

    try {
        // navigate to your javascript page
        await driver.get('/build-shows-page.js');

        // wait until an element is present (for example, wait for an element with ID 'showsContainer')
        await driver.wait(until.elementLocated(By.id('showsContainer')), 5000);

        // perform actions (click buttons, fill forms, etc.)
        // example: click a button with id 'buyButton'
        await driver.findElement(By.id('buyButton')).click();

        // add more actions and assertions as needed

    } catch (error) {
        console.error('test failed with error', error);
    } finally {
        //close the browser
        await driver.quit()
    }

}