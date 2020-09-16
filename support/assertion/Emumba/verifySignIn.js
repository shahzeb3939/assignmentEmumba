import { assert } from "chai"
import appHome from "../../../page/Emumba/appHome"

export default () => {
    appHome.logoIcon.waitForDisplayed();
    assert(appHome.logoIconText(), 'Savers');
}