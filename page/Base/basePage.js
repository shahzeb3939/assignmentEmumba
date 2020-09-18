export default class basePage {
    clickElement(elementSelector) {
        elementSelector.waitForDisplayed();
        elementSelector.click();
        browser.pause(500);
    }
}
