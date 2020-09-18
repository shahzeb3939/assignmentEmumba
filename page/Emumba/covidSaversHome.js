import basePage from "../../page/Base/basePage"

class covidSaversHome extends basePage {
    get homeUrl() { return 'https://emumba-test.herokuapp.com/' }
    get homeLoginButton() { return $('nav button:nth-child(3)') }
    get recentFlyer() { return $('div.MuiTypography-root.MuiTypography-h5.MuiTypography-paragraph') }
    get logoutButton() { return $('nav button:nth-child(3) span') }

    clickLogoutButton() {
        this.logoutButton.click();
    }

    titleRecentFlyer() {
        return this.recentFlyer.getText();
    }

    clickHomeLoginButton() {
        this.clickElement(this.homeLoginButton);
    }

}

module.exports = new covidSaversHome();