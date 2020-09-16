import appHome from "../../../page/Emumba/appHome"

export default () => {
    appHome.postFlyerButton.waitForDisplayed();
    appHome.clickPostFlyerButton();
    browser.pause(500);
}