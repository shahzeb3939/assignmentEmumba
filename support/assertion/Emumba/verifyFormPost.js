import formSubmit from "../../../page/Emumba/formSubmit"

export default () => {
    formSubmit.alertMessage.waitForDisplayed();
    assert(formSubmit.alertMessageText(), 'Flyer has been created successfully.');
}