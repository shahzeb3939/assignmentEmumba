import covidSaversHome from "../../../page/Emumba/covidSaversHome"

export default () => {
    browser.url(covidSaversHome.homeUrl);
    browser.pause(500);
}