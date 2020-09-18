import basePage from "../../page/Base/basePage"

class formSubmit extends basePage {
    get titleName() { return $('div.MuiGrid-grid-xs-4 h6') }
    get titleFormField() { return $('div:nth-child(1) > div > textarea:nth-child(1)') }
    get detailsFormField() { return $('form div:nth-child(2) textarea') }
    get phoneFormField() { return $('input[name="phone"]') }
    get addressFormField() { return $('input[name="address"]') }
    get tagsFormField() { return $('div[role="combobox"] input') }
    get postButton() { return $('button[type="submit"] span.MuiButton-label') }
    get alertMessage() { return $('div.MuiAlert-message') }
    get homeButton() { return $('nav button:nth-child(1) a') }

    clickHomeButton() {
        this.homeButton.click();
    }

    alertMessageText() {
        return this.alertMessage.getText();
    }

    // clickPostButton() {
    //     this.postButton.click();
    // }

    titleNameText() {
        return this.titleName.getText();
    }
}

module.exports = new formSubmit();
