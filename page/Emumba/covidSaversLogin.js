class covidSaversLogin {
    get homeTag() { return $('div h5') }
    get notUserButton() { return $('form a') }

    get email() { return $('input[name="email"]') }
    get password() { return $('input[name="password"]') }

    get signInButton() { return $('span.MuiButton-label') }

    clickSignInButton() {
        this.signInButton.click();
    }

    clickNotUserButton() {
        this.notUserButton.click();
    }

    homeTagText() {
        return this.homeTag.getText();
    }
}

module.exports = new covidSaversLogin();