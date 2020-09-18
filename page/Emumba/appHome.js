import basePage from "../../Base/basePage"

class appHome extends basePage {
    get logoIcon() { return $('div > h6') }
    get postFlyerButton() { return $('button:nth-child(2) a') }
    get createFlyerButton() { return $('div h5')}

    createFlyerButtonText() {
        return this.createFlyerButton.getText();
    }

    logoIconText() {
        return this.logoIcon.getText();
    }
}

module.exports = new appHome();