import gotoGoogle from "../../support/action/Google/gotoGoogle"
import verifyGoogle from "../../support/assertion/Google/verifyGoogle"
import googleSearch from "../../support/action/Google/googleSearch"
import verifyGoogleSearch from "../../support/assertion/Google/verifyGoogleSearch"
import findLink from "../../support/action/Google/findLink"
import openLinkInNewTab from "../../support/action/Google/openLinkInNewTab"
import verifyIMDBPage from "../../support/assertion/Google/verifyIMDBPage"
import clickOnLink from "../../support/action/Google/clickOnLink"
import verifyFullCast from "../../support/assertion/Google/verifyFullCast"
import saveCastToExcel from "../../support/action/Excel/saveCastToExcel"

describe ("Google Search test", function () {

    it ("should goto google.com", function () {
        gotoGoogle();
        verifyGoogle();
    })

    it ("should search After Life in google", () => {
        googleSearch('After Life');
        verifyGoogleSearch('After Life');
    })

    it ("should open --  After Life (TV Series 2019– ) - IMDb  -- in a new tab", () => {
        openLinkInNewTab(findLink("imdbLink"));
        verifyIMDBPage();
    })

    it ("should click on --  See full cast  -- Link", () => {
        clickOnLink('seeFullCast');
        verifyFullCast();
    })

    it ("should save 49 cast members to xlsx file", () => {
        saveCastToExcel();
    })
})