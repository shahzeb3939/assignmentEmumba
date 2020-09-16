class covidSaversRegister {
    get confirmPasswordTag() { return $('div:nth-child(4) label') }

    get firstName() { return $('input[name="first_name"]') }
    get lastName() { return $('input[name="last_name"]') }
    get email() { return $('input[name="email"]') }
    get password() { return $('input[name="password"]') }
    get confirmPassword() { return $('input[name="confirm_password"]') }
    get signUpButton() { return $('form a') }

    clickSignUpButton() {
        this.signUpButton.click();
    }

    confirmPasswordTagText() {
        return this.confirmPasswordTag.getText();
    }
}

module.exports = new covidSaversRegister();