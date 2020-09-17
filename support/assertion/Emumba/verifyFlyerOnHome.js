import covidSaversHome from "../../../page/Emumba/covidSaversHome"

export default () => {
    covidSaversHome.recentFlyer.waitForDisplayed();
    assert(covidSaversHome.titleRecentFlyer(), 'Posting a flyer');
}