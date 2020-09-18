import covidSaversLogin from "../../../page/Emumba/covidSaversLogin"

export default () => {
    // covidSaversLogin.signInButton.waitForDisplayed();
    // covidSaversLogin.clickSignInButton();
    // browser.pause(500);
    covidSaversLogin.clickElement(covidSaversLogin.signInButton);
}