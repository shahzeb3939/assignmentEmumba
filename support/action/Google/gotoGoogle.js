import googlePage from "../../../page/googlePage"

export default () => {
    browser.url(googlePage.url);
    browser.pause(3000);
}