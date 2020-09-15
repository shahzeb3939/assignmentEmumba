import googlePage from "../../../page/googlePage"

export default (linkSelector) => {
    linkSelector.click();
    browser.pause(2000);
}