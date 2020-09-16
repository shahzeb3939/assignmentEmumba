import googlePage from "../../../page/googlePage"

export default () => {
    var jArray = [];
    var jObj = {};

    for (var i=2; i<=98; i+=2) {
        jObj = {};
        jObj["Name"] = $(`tr:nth-child(${i}) > td:nth-child(2) > a`).getText();
        jObj["Screen Name"] = $(`tr:nth-child(${i}) > td.character > a:nth-child(1)`).getText();
        jObj["Appearances"] = $(`tr:nth-child(${i}) > td.character > a.toggle-episodes`).getText();
        jArray.push(jObj);
    }
    console.log(jArray);
}
