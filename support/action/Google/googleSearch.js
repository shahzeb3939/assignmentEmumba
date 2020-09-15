import googlePage from "../../../page/googlePage"

export default (searchQuery) => {
    googlePage.googleSearchInputField.waitForDisplayed();
    googlePage.googleSearchInputField.click();
    googlePage.googleSearchInputField.setValue(searchQuery);
    googlePage.googleSearchInputButton.waitForDisplayed();
    googlePage.googleSearchInputButton.click();
    browser.pause(2000);
}