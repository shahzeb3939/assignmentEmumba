class covidSaversHome {
    get homeUrl() { return 'https://emumba-test.herokuapp.com/' }
    get homeLoginButton() { return $('nav button:nth-child(3)') }
    get recentFlyer() { return $('div.MuiTypography-root.MuiTypography-h5.MuiTypography-paragraph') }

    titleRecentFlyer() {
        return this.recentFlyer.getText();
    }

    clickHomeLoginButton() {
        this.homeLoginButton.click();
    }

}

module.exports = new covidSaversHome();