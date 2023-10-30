// const { Builder, By, Key, until } = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');

// // defines asynchronous JavaScript function. Async is used to indicate that this function contains asynchronous operations. 
// async function runTest() {
//     // set up chrome options
//     let chromeOptions = new chrome.Options();
//     chromeOptions.addArguments('--headless'); // headless mode, meaning it will run without a visible user interface

//     // launch chrome browser, method specifies that the test will run on chrome, await is used because build() returns a promise and await ensures that the program waits for the promise to resolve before proceeding.
//     let driver = await new Builder(). forBrowser('chrome').setChromeOptions(chromeOptions).build();

//     // code inside this block is executed, and if any error occurs, they can be caught and handled in catch.
//     try {
//         // navigate to your javascript page, it waits until the page is fully loaded before proceeding to the next step
//         await driver.get('./index.html');

//         // wait until an element is present (for example, wait for an element with ID 'showsContainer')
//         // driver.wait pauses the script execution until a specific condition is met. 
//         await driver.wait(until.elementLocated(By.id('showsContainer')), 5000);

//         // perform actions (click buttons, fill forms, etc.)
//         // example: click a button with id 'buyButton'
//         // .click simulates a user click on the found element, triggering the associated JavaScript events.
//         await driver.findElement(By.id('buyButton')).click();

//         // add more actions and assertions as needed

//         console.log('test completed successfully!')

//     // any errors that occurred during the try block are caught, and an error message is logged to the console.
//     } catch (error) {
//         console.error('test failed with error', error);
    
//     // contains cleanup operations. 
//     } finally {
//         //close the browser
//         await driver.quit()
//     }

// }

const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

async function runBioPageTest() {
    let chromeOptions = new chrome.Options();
    chromeOptions.addArguments('--headless');
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();

    try {
        // Navigate to the bio page
        await driver.get('URL_TO_YOUR_BIO_PAGE'); // Replace with the actual URL

        // Wait for the comment form and input fields to be present
        await driver.wait(until.elementLocated(By.id('commentForm')), 5000);
        await driver.wait(until.elementLocated(By.id('name')), 5000);
        await driver.wait(until.elementLocated(By.id('comment')), 5000);

        // Fill out the comment form
        const nameInput = await driver.findElement(By.id('name'));
        const commentInput = await driver.findElement(By.id('comment'));
        const submitButton = await driver.findElement(By.id('submitButton'));

        await nameInput.sendKeys('John Doe');
        await commentInput.sendKeys('This is a test comment');
        await submitButton.click();

        // Wait for the new comment to appear
        await driver.wait(until.elementLocated(By.className('form-section__comment')), 5000);

        // Verify that the comment was added successfully
        const comments = await driver.findElements(By.className('form-section__comment'));
        assert.strictEqual(comments.length, 1, 'Expected 1 comment to be displayed');

        const commentText = await comments[0].getText();
        assert.strictEqual(commentText.includes('John Doe'), true, 'Comment does not contain the expected name');
        assert.strictEqual(commentText.includes('This is a test comment'), true, 'Comment does not contain the expected text');

        console.log('Test completed successfully!');
    } catch (error) {
        console.error('Test failed with error:', error);
    } finally {
        await driver.quit();
    }
}

runBioPageTest();
