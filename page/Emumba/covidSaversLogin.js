class covidSaversLogin {
    get homeTag() { return $('div h5') }

    homeTagText() {
        return this.homeTag.getText();
    }
}

module.exports = new covidSaversLogin();