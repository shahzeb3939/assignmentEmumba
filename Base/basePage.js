import xlsx from "xlsx"

export default class basePage {
    get searchResultsText() { return $$('div.r h3') }
    get searchResultsLink() { return $$('div.r > a') }
    get searchResultLength() { return $$('div.r h3').length }

    clickElement(elementSelector) {
        elementSelector.waitForDisplayed();
        elementSelector.click();
    }

    saveGoogleSearchResultsInExcel(searchText) {
        var wb = xlsx.readFile("qaautomation.xlsx");
        var jArray = [];
        var jObj = {};
        if (wb.Sheets[`${searchText} - Search Results`] == undefined) {
            var ws = xlsx.utils.json_to_sheet(jArray);
            xlsx.utils.book_append_sheet(wb, ws, `${searchText} - Search Results`);
        } else {
            var ws = wb.Sheets[`${searchText} - Search Results`];
        }

        for (var i=0;i<this.searchResultLength;i++) {
            jObj = {};
            jObj["Search Result Text"] = this.searchResultsText[i].getText();
            jObj["Search Result Link"] = this.searchResultsLink[i].getAttribute('href');
            jArray.push(jObj);
        }

        xlsx.utils.sheet_add_json(ws, jArray)
        xlsx.writeFile(wb, "qaautomation.xlsx")
    }
}
