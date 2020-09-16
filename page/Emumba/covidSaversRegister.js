class covidSaversRegister {
    get confirmPasswordTag() { return $('div:nth-child(4) label') }

    confirmPasswordTagText() {
        return this.confirmPasswordTag.getText();
    }
}

module.exports = new covidSaversRegister();