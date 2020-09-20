
export default class basePage {
    get searchResultsText() { return $$('div.r h3') }
    get searchResultsLink() { return $$('div.r > a') }
    get searchResultLength() { return $$('div.r h3').length }

    clickElement(elementSelector) {
        elementSelector.waitForDisplayed();
        elementSelector.click();
    }
}
