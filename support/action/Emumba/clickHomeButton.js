import formSubmit from "../../../page/Emumba/formSubmit"
import covidSaversHome from "../../../page/Emumba/covidSaversHome"

export default () => {
    formSubmit.clickElement(formSubmit.homeButton)
    browser.saveScreenshot(`${covidSaversHome.titleRecentFlyer()}.png`)
    // browser.pause(500);
}