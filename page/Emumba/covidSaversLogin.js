class covidSaversLogin {
    get homeTag() { return $('div h5') }
    get notUserButton() { return $('form a') }

    clickNotUserButton() {
        this.notUserButton.click();
    }

    homeTagText() {
        return this.homeTag.getText();
    }
}

module.exports = new covidSaversLogin();