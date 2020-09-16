import covidSaversHome from "../../../page/Emumba/covidSaversHome"

export default () => {
    covidSaversHome.homeLoginButton.waitForDisplayed();
    covidSaversHome.clickHomeLoginButton();
    browser.pause(1000);
}