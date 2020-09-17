import gotoEmumbaApp from "../../support/action/Emumba/gotoEmumbaApp" 
import verifyHomePage from "../../support/assertion/Emumba/verifyHomePage"
import clickLoginButton from "../../support/action/Emumba/clickLoginButton" 
import verifyLoginPage from "../../support/assertion/Emumba/verifyLoginPage"
import clickLink from "../../support/action/Emumba/clickLink" 
import verifyRegisterPage from "../../support/assertion/Emumba/verifyRegisterPage"
import fillSignUp from "../../support/action/Emumba/fillSignUp"
import verifySignUp from "../../support/assertion/Emumba/verifySignUp"
import clickSignUp from "../../support/action/Emumba/clickSignUp"
import enterCredentials from "../../support/action/Emumba/enterCredentials"
import verifyCredentials from "../../support/assertion/Emumba/verifyCredentials"
import clickSignIn from "../../support/action/Emumba/clickSignIn"
import verifySignIn from "../../support/assertion/Emumba/verifySignIn"
import clickPostFlyer from "../../support/action/Emumba/clickPostFlyer"
import verifyPostFlyerPage from "../../support/assertion/Emumba/verifyPostFlyerPage"
import fillForm from "../../support/action/Emumba/fillForm"
import verifyFormData from "../../support/assertion/Emumba/verifyFormData"
import postForm from "../../support/action/Emumba/postForm"
import verifyFormPost from "../../support/assertion/Emumba/verifyFormPost"


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

    it ('Should click on SignUp button', () => {
        clickSignUp();
        verifyLoginPage();
    })

    it ('Should enter valid credentials and SignIn', () => {
        enterCredentials();
        verifyCredentials();
        clickSignIn();
        verifySignIn(); 
    })

    it ('Should click on Post Flyer', () => {
        clickPostFlyer();
        verifyPostFlyerPage();
    })

    it ('Should Fill the form and Post it', () => {
        fillForm();
        verifyFormData();
        postForm();
        verifyFormPost();
    })

})