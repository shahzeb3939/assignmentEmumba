import covidSaversLogin from "../../../page/Emumba/covidSaversLogin"

export default () => {
    covidSaversLogin.homeTag.waitForDisplayed();
    assert(covidSaversLogin.homeTagText, 'Savers / Sign In');
}