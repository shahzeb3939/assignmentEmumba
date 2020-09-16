import gotoEmumbaApp from "../../support/action/Emumba/gotoEmumbaApp" 
import verifyHomePage from "../../support/assertion/Emumba/verifyHomePage"

describe ('Emumba App Test', function () {
    
    it ('Should go to Emumba App Home Page', () => {
        gotoEmumbaApp();
        verifyHomePage();
    })
})