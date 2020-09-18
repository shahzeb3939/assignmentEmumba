import googlePage from "../../../page/googlePage"

export default (searchQuery) => {
    googlePage.clickElement(googlePage.googleSearchInputField);
    googlePage.googleSearchInputField.setValue(searchQuery);
    googlePage.clickElement(googlePage.googleSearchInputButton);
}