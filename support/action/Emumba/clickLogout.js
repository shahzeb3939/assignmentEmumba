import covidSaversHome from "../../../page/Emumba/covidSaversHome"

export default () => {
    // covidSaversHome.logoutButton.waitForDisplayed();
    // covidSaversHome.clickLogoutButton();
    // browser.pause(500);
    covidSaversHome.clickElement(covidSaversHome.logoutButton);
}