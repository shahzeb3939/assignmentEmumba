// import xlsx from "xlsx"
import excel from "../../../excelClass/excel"

export default () => {
    var jArray = [];
    var jObj = {};

    // var wb = xlsx.readFile("qaautomation.xlsx");
    var wb = excel.readExcelWorkBook("qaautomation.xlsx");

    // var ws = wb.Sheets["Series Cast"];
    var ws = excel.readExcelWorkSheet(wb, "Series Cast");



    for (var i=2; i<=98; i+=2) {
        jObj = {};

        jObj["Name"] = $(`tr:nth-child(${i}) > td:nth-child(2) > a`).getText();

        jObj["Screen Name"] = $(`tr:nth-child(${i}) > td.character`).getText().split("\n")[0].split(" ")[1];
        
        jObj["Appearances"] = $(`tr:nth-child(${i}) > td.character > a.toggle-episodes`).getText();

        jArray.push(jObj);
    }

    // xlsx.utils.sheet_add_json(ws, jArray);
    excel.addJsonArrayToWorkSheet(ws, jArray);
    // xlsx.writeFile(wb, "qaautomation.xlsx")
    excel.writeWorkBookToFile(wb, "qaautomation.xlsx");
}