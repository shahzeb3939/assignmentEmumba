import gotoEmumbaApp from "../../support/action/Emumba/gotoEmumbaApp" 
import verifyHomePage from "../../support/assertion/Emumba/verifyHomePage"
import clickLoginButton from "../../support/action/Emumba/clickLoginButton" 
import verifyLoginPage from "../../support/assertion/Emumba/verifyLoginPage"

describe ('Emumba App Test', function () {
    
    it ('Should go to Emumba App Home Page', () => {
        gotoEmumbaApp();
        verifyHomePage();
    })

    it ('Should click on the Login Button', () => {
        clickLoginButton();
        // verifyLoginPage();
    })
})