import googlePage from "../../../page/googlePage"

export default () => {
    googlePage.googleImage.waitForDisplayed();
    assert(googlePage.googleImage.isExisting(), true);
}