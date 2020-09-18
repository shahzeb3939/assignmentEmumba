import covidSaversRegister from "../../../page/Emumba/covidSaversRegister"

export default () => {
    // covidSaversRegister.signUpButton.waitForDisplayed();
    // covidSaversRegister.clickSignUpButton();
    // browser.pause(500);
    covidSaversRegister.clickElement(covidSaversRegister.signUpButton);
}