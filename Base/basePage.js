export default class basePage {
    clickElement(elementSelector) {
        elementSelector.waitForDisplayed();
        elementSelector.click();
    }
}
