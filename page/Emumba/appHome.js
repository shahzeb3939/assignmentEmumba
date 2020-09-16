class appHome {
    get logoIcon() { return $('div > h6') }
    get postFlyerButton() { return $('button:nth-child(2) a') }
    get createFlyerButton() { return $('div h5')}

    createFlyerButtonText() {
        return this.createFlyerButton.getText();
    }

    clickPostFlyerButton() {
        this.postFlyerButton.click();
    }

    logoIconText() {
        return this.logoIcon.getText();
    }
}

module.exports = new appHome();