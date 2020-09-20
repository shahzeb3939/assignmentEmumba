import xlsx from "xlsx"

class excel {

    /**
     * Returns xlsx WorkBook object
     * @param {String} fileName 
     */
    readExcelWorkBook (fileName) {
        return xlsx.readFile(fileName);
    }
    
    /**
     * Returns xlsx WorkSheet object
     * @param {xlsx.WorkBook} workBook 
     * @param {String} sheetName 
     */
    readExcelWorkSheet (workBook, sheetName) {
        return workBook.Sheets[sheetName];
    }

    /**
     * Returns json data from WorkSheet
     * @param {xlsx.WorkSheet} workSheet 
     */
    readJsonDataFromWorkSheet (workSheet) {
        return xlsx.utils.sheet_to_json(workSheet);
    }
    
    /**
     * Returns a WorkSheet with an empty json Array
     */
    createEmptyWorkSheet () {
        var jArray = [];
        return xlsx.utils.json_to_sheet(jArray);
    }

    /**
     * 
     * @param {xlsx.WorkBook} workBook 
     * @param {xlsx.WorkSheet} workSheet 
     * @param {String} workSheetName 
     */
    appendWorkSheetToWorkBook (workBook, workSheet, workSheetName) {
        xlsx.utils.book_append_sheet(workBook, workSheet, workSheetName);
    }

    /**
     * 
     * @param {xlsx.WorkSheet} workSheet 
     * @param {Array} jArray 
     */
    addJsonArrayToWorkSheet (workSheet, jArray) {
        xlsx.utils.sheet_add_json(workSheet, jArray);
    }

    /**
     * 
     * @param {xlsx.WorkBook} workBook 
     * @param {String} fileName 
     */
    writeWorkBookToFile (workBook, fileName) {
        xlsx.writeFile(workBook, fileName);
    }
}

module.exports = new excel();
