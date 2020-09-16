import covidSaversRegister from "../../../page/Emumba/covidSaversRegister";

export default () => {
    covidSaversRegister.confirmPasswordTag.waitForDisplayed();
    assert(covidSaversRegister.confirmPasswordTagText(), 'Confirm Password');
}