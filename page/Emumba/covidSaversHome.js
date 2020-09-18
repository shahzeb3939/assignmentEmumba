import basePage from "../../Base/basePage"

class covidSaversHome extends basePage {
    get homeUrl() { return 'https://emumba-test.herokuapp.com/' }
    get homeLoginButton() { return $('nav button:nth-child(3)') }
    get recentFlyer() { return $('div.MuiTypography-root.MuiTypography-h5.MuiTypography-paragraph') }
    get logoutButton() { return $('nav button:nth-child(3) span') }

    titleRecentFlyer() {
        return this.recentFlyer.getText();
    }

}

module.exports = new covidSaversHome();