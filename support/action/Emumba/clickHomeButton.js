import formSubmit from "../../../page/Emumba/formSubmit"
import covidSaversHome from "../../../page/Emumba/covidSaversHome"

export default () => {
    formSubmit.homeButton.waitForDisplayed();
    formSubmit.clickHomeButton();
    browser.pause(500);
    browser.saveScreenshot(`${covidSaversHome.titleRecentFlyer()}.png`)
    browser.pause(500);
}