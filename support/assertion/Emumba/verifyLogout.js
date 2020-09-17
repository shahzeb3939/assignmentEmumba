import { assert } from "chai";
import covidSaversHome from "../../../page/Emumba/covidSaversHome"

export default () => {
    covidSaversHome.logoutButton.waitForDisplayed();
    assert(covidSaversHome.logoutButton.getText(), 'Login');
}