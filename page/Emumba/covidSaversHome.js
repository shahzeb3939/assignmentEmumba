class covidSaversHome {
    get homeUrl() { return 'https://emumba-test.herokuapp.com/' }
    get homeLoginButton() { return $('nav button:nth-child(3)') }

    clickHomeLoginButton() {
        this.homeLoginButton.click();
    }

}

module.exports = new covidSaversHome();