// import xlsx from "xlsx"
import excel from "../excelClass/excel"
import basePage from "../Base/basePage"

class googlePage extends basePage {
    get url() { return "https://www.google.com/" }
    get googleImage() { return $(`img[alt="Google"]`) }
    get googleSearchInputField() { return $('input.gLFyf.gsfi') }
    get googleSearchInputButton() { return $('div.aajZCb input.gNO89b') }
    get fullCastTitle() { return $('.subpage_title_block > div > h1') }
    get seeFullCastButton() { return $('#titleCast .see-more a') }

    pageTitle() {
        return browser.getTitle();
    }

    gotoGoogle() {
        browser.url(this.url)
    }

    saveGoogleSearchResultsInExcel(searchText) {
        // var wb = xlsx.readFile("qaautomation.xlsx");
        var wb = excel.readExcelWorkBook("qaautomation.xlsx");

        var jArray = [];
        var jObj = {};
        if (wb.Sheets[`${searchText} - Search Results`] == undefined) {
            // var ws = xlsx.utils.json_to_sheet(jArray);
            var ws = excel.createEmptyWorkSheet();

            // xlsx.utils.book_append_sheet(wb, ws, `${searchText} - Search Results`);
            excel.appendWorkSheetToWorkBook(wb, ws, `${searchText} - Search Results`);
        } else {
            // var ws = wb.Sheets[`${searchText} - Search Results`];
            var ws = excel.readExcelWorkSheet(wb, `${searchText} - Search Results`);
        }

        for (var i=0;i<this.searchResultLength;i++) {
            jObj = {};
            jObj["Search Result Text"] = this.searchResultsText[i].getText();
            jObj["Search Result Link"] = this.searchResultsLink[i].getAttribute('href');
            jArray.push(jObj);
        }

        // xlsx.utils.sheet_add_json(ws, jArray);
        excel.addJsonArrayToWorkSheet(ws, jArray);
        // xlsx.writeFile(wb, "qaautomation.xlsx");
        excel.writeWorkBookToFile(wb, "qaautomation.xlsx");
    }
}

module.exports = new googlePage();