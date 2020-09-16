import { assert } from "chai";
import appHome from "../../../page/Emumba/appHome"

export default () => {
    appHome.createFlyerButton.waitForDisplayed();
    assert(appHome.createFlyerButtonText(), 'Create a flyer');
}