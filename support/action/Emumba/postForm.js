import formSubmit from "../../../page/Emumba/formSubmit"

export default () => {
    formSubmit.postButton.waitForExist();
    formSubmit.clickPostButton();
    browser.pause(500);
}