import xlsx from "xlsx"

export default () => {
    var jArray = [];
    var jObj = {};

    var wb = xlsx.readFile("qaautomation.xlsx");

    var ws = wb.Sheets["Series Cast"];


    for (var i=2; i<=98; i+=2) {
        jObj = {};

        jObj["Name"] = $(`tr:nth-child(${i}) > td:nth-child(2) > a`).getText();

        jObj["Screen Name"] = $(`tr:nth-child(${i}) > td.character`).getText().split("\n")[0].split(" ")[1];
        
        jObj["Appearances"] = $(`tr:nth-child(${i}) > td.character > a.toggle-episodes`).getText();

        jArray.push(jObj);
    }

    var nws = xlsx.utils.json_to_sheet(jArray);
    xlsx.utils.book_append_sheet(wb,nws,"Series Cast");
    xlsx.writeFile(wb, "qaautomation.xlsx")
}