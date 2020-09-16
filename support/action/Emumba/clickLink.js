import covidSaversLogin from "../../../page/Emumba/covidSaversLogin"

export default () => {
    covidSaversLogin.notUserButton.waitForDisplayed();
    covidSaversLogin.clickNotUserButton();
    browser.pause(500);
}