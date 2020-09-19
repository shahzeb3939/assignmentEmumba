import xlsx from "xlsx"

export default (linkText, searchText) => {
    var wb = xlsx.readFile("qaautomation.xlsx");
    var ws = wb.Sheets[`${searchText} - Search Results`];

    var jsd = xlsx.utils.sheet_to_json(ws);

    for (var i=0;i<jsd.length;i++) {
        if ( jsd[i]['Search Result Text'] == linkText ) {
            return jsd[i]['Search Result Link'];
        }
    }
}