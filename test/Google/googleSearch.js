import gotoGoogle from "../../support/action/Google/gotoGoogle"
import verifyGoogle from "../../support/assertion/Google/verifyGoogle"
import googleSearch from "../../support/action/Google/googleSearch"
import verifyGoogleSearch from "../../support/assertion/Google/verifyGoogleSearch"

describe ("Google Search test", function () {

    it ("should goto google.com", function () {
        gotoGoogle();
        verifyGoogle();
    })

    it ("should search After Life in google", () => {
        googleSearch('After Life');
        verifyGoogleSearch('After Life');
    })
})