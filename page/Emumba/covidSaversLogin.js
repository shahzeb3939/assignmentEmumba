import basePage from "../../Base/basePage"

class covidSaversLogin extends basePage {
    get homeTag() { return $('div h5') }
    get notUserButton() { return $('form a') }

    get email() { return $('input[name="email"]') }
    get password() { return $('input[name="password"]') }

    get signInButton() { return $('span.MuiButton-label') }

    homeTagText() {
        return this.homeTag.getText();
    }
}

module.exports = new covidSaversLogin();