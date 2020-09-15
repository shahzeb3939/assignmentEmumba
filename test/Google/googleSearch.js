import gotoGoogle from "../../support/action/Google/gotoGoogle"
import verifyGoogle from "../../support/assertion/Google/verifyGoogle"

describe ("Google Search test", function () {

    it ("should goto google.com", function () {
        gotoGoogle();
        verifyGoogle();
    })
})