import xlsx from "xlsx"
import covidSaversRegister from "../../../page/Emumba/covidSaversRegister"

export default () => {
    var wb = xlsx.readFile("qaautomation.xlsx");

    var wsCast = wb.Sheets["Series Cast"];
    var castData = xlsx.utils.sheet_to_json(wsCast);

    var wsInput = wb.Sheets["Input"];
    var inputData = xlsx.utils.sheet_to_json(wsInput);

    covidSaversRegister.firstName.waitForDisplayed();
    covidSaversRegister.firstName.click();
    covidSaversRegister.firstName.setValue(castData[4]["Name"]);

    covidSaversRegister.lastName.waitForDisplayed();
    covidSaversRegister.lastName.click();
    covidSaversRegister.lastName.setValue(castData[4]["Screen Name"]);

    covidSaversRegister.email.waitForDisplayed();
    covidSaversRegister.email.click();
    covidSaversRegister.email.setValue(inputData[4]["value"]);

    covidSaversRegister.password.waitForDisplayed();
    covidSaversRegister.password.click();
    covidSaversRegister.password.setValue(inputData[5]["value"]);

    covidSaversRegister.confirmPassword.waitForDisplayed();
    covidSaversRegister.confirmPassword.click();
    covidSaversRegister.confirmPassword.setValue(inputData[5]["value"]);

    browser.pause(500);
}