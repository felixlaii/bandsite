const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// defines asynchronous JavaScript function. Async is used to indicate that this function contains asynchronous operations. 
async function runTest() {
    // set up chrome options
    let chromeOptions = new chrome.Options();
    chromeOptions.addArguments('--headless'); // headless mode, meaning it will run without a visible user interface

    // launch chrome browser, method specifies that the test will run on chrome, await is used because build() returns a promise and await ensures that the program waits for the promise to resolve before proceeding.
    let driver = await new Builder(). forBrowser('chrome').setChromeOptions(chromeOptions).build();

    // code inside this block is executed, and if any error occurs, they can be caught and handled in catch.
    try {
        // navigate to your javascript page, it waits until the page is fully loaded before proceeding to the next step
        await driver.get('scripts/build-shows-page.js');

        // wait until an element is present (for example, wait for an element with ID 'showsContainer')
        // driver.wait pauses the script execution until a specific condition is met. 
        await driver.wait(until.elementLocated(By.id('showsContainer')), 5000);

        // perform actions (click buttons, fill forms, etc.)
        // example: click a button with id 'buyButton'
        // .click simulates a user click on the found element, triggering the associated JavaScript events.
        await driver.findElement(By.id('buyButton')).click();

        // add more actions and assertions as needed

    // any errors that occurred during the try block are caught, and an error message is logged to the console.
    } catch (error) {
        console.error('test failed with error', error);
    
    // contains cleanup operations. 
    } finally {
        //close the browser
        await driver.quit()
    }

}