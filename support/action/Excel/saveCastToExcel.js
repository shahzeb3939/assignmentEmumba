import excel from "../../../excelClass/excel"

export default () => {
    var jArray = [];
    var jObj = {};

    var wb = excel.readExcelWorkBook("qaautomation.xlsx");
    var ws = excel.readExcelWorkSheet(wb, "Series Cast");

    for (var i=2; i<=98; i+=2) {
        jObj = {};

        jObj["Name"] = $(`tr:nth-child(${i}) > td:nth-child(2) > a`).getText();

        jObj["Screen Name"] = $(`tr:nth-child(${i}) > td.character`).getText().split("\n")[0].split(" ")[1];
        
        jObj["Appearances"] = $(`tr:nth-child(${i}) > td.character > a.toggle-episodes`).getText();

        jArray.push(jObj);
    }

    excel.addJsonArrayToWorkSheet(ws, jArray);
    excel.writeWorkBookToFile(wb, "qaautomation.xlsx");
}