// import xlsx from "xlsx"
import excel from "../../../excelClass/excel"


export default (linkText, searchText) => {
    // var wb = xlsx.readFile("qaautomation.xlsx");
    var wb = excel.readExcelWorkBook("qaautomation.xlsx");

    // var ws = wb.Sheets[`${searchText} - Search Results`];
    var ws = excel.readExcelWorkSheet(wb, `${searchText} - Search Results`);


    // var jsd = xlsx.utils.sheet_to_json(ws);
    var jsd = excel.readJsonDataFromWorkSheet(ws);


    for (var i=0;i<jsd.length;i++) {
        if ( jsd[i]['Search Result Text'] == linkText ) {
            return jsd[i]['Search Result Link'];
        }
    }
}