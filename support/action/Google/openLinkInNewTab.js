import googlePage from "../../../page/googlePage"

export default (linkSelector) => {
    browser.newWindow(linkSelector.getAttribute('href'));
}