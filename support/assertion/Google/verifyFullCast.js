import googlePage from "../../../page/googlePage"

export default () => {
    googlePage.fullCastTitle.waitForDisplayed();
    assert(googlePage.pageTitle(), `After Life (TV Series 2019– ) - Full Cast & Crew - IMDb`);
}