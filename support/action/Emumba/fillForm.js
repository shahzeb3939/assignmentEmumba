import xlsx from "xlsx"
import formSubmit from "../../../page/Emumba/formSubmit"

export default () => {
    formSubmit.titleName.waitForDisplayed();
    formSubmit.titleFormField.waitForDisplayed();
    formSubmit.titleFormField.click();
    formSubmit.titleFormField.setValue(formSubmit.titleNameText());

    formSubmit.detailsFormField.waitForDisplayed();
    formSubmit.detailsFormField.click();
    for (var i=1;i<=9;i+=2) {
        formSubmit.detailsFormField.setValue($(`ul li:nth-child(${i}) span`).getText());
        if (i !== 9) {
            browser.keys("Enter");
        }
    }

    var wb = xlsx.readFile("qaautomation.xlsx");

    var wsInput = wb.Sheets["Input"];
    var inputData = xlsx.utils.sheet_to_json(wsInput);

    formSubmit.phoneFormField.waitForDisplayed();
    formSubmit.phoneFormField.click();
    formSubmit.phoneFormField.setValue(inputData[6]["value"]);

    formSubmit.addressFormField.waitForDisplayed();
    formSubmit.addressFormField.click();
    formSubmit.addressFormField.setValue(inputData[7]["value"]);

    formSubmit.tagsFormField.waitForDisplayed();
    formSubmit.tagsFormField.click();
    for (var i=0;i<3;i++) {
        formSubmit.tagsFormField.setValue(inputData[`${i+8}`]["value"]);
        browser.keys("Enter");
    }
    browser.pause(500);
}