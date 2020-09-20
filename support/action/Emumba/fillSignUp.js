import excel from "../../../excelClass/excel"
import covidSaversRegister from "../../../page/Emumba/covidSaversRegister"

export default () => {
    var wb = excel.readExcelWorkBook("qaautomation.xlsx");

    var wsCast = excel.readExcelWorkSheet(wb, "Series Cast");
    var castData = excel.readJsonDataFromWorkSheet(wsCast);

    var wsInput = excel.readExcelWorkSheet(wb, "Input");
    var inputData = excel.readJsonDataFromWorkSheet(wsInput);


    covidSaversRegister.clickElement(covidSaversRegister.firstName);
    covidSaversRegister.firstName.setValue(castData[4]["Name"]);

    covidSaversRegister.clickElement(covidSaversRegister.lastName);
    covidSaversRegister.lastName.setValue(castData[4]["Screen Name"]);

    covidSaversRegister.clickElement(covidSaversRegister.email);
    covidSaversRegister.email.setValue(inputData[4]["value"]);

    covidSaversRegister.clickElement(covidSaversRegister.password);
    covidSaversRegister.password.setValue(inputData[5]["value"]);

    covidSaversRegister.clickElement(covidSaversRegister.confirmPassword);
    covidSaversRegister.confirmPassword.setValue(inputData[5]["value"]);

}