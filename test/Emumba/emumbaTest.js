import gotoEmumbaApp from "../../support/action/Emumba/gotoEmumbaApp" 
import verifyHomePage from "../../support/assertion/Emumba/verifyHomePage"
import clickLoginButton from "../../support/action/Emumba/clickLoginButton" 
import verifyLoginPage from "../../support/assertion/Emumba/verifyLoginPage"
import clickLink from "../../support/action/Emumba/clickLink" 
import verifyRegisterPage from "../../support/assertion/Emumba/verifyRegisterPage"
import fillSignUp from "../../support/action/Emumba/fillSignUp"
import verifySignUp from "../../support/assertion/Emumba/verifySignUp"

describe ('Emumba App Test', function () {
    
    it ('Should go to Emumba App Home Page', () => {
        gotoEmumbaApp();
        verifyHomePage();
    })

    it ('Should click on the Login Button', () => {
        clickLoginButton();
        verifyLoginPage();
    })

    it ('Should click the link --Not a user yet--', () => {
        clickLink();
        verifyRegisterPage();
    })

    it ('Should fill the Signup Form', () => {
        fillSignUp();
        verifySignUp();
    })

})