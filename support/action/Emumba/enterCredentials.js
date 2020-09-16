import xlsx from "xlsx"
import covidSaversLogin from "../../../page/Emumba/covidSaversLogin"

export default () => {
    var wb = xlsx.readFile("qaautomation.xlsx");

    var wsInput = wb.Sheets["Input"];
    var inputData = xlsx.utils.sheet_to_json(wsInput);
    
    covidSaversLogin.email.waitForDisplayed();
    covidSaversLogin.email.click();
    covidSaversLogin.email.setValue(inputData[4]["value"]);

    covidSaversLogin.password.waitForDisplayed();
    covidSaversLogin.password.click();
    covidSaversLogin.password.setValue(inputData[5]["value"]);
}