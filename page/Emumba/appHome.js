class appHome {
    get logoIcon() { return $('div > h6') }

    logoIconText() {
        return this.logoIcon.getText();
    }
}

module.exports = new appHome();