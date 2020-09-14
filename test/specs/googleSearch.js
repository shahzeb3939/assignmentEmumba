import googlePage from "../../page/googlePage"

describe ("Google Search test", function () {

    it ("should goto google.com", function () {
        console.log(googlePage.url);
        console.log("hehon");
        console.log("hehon");
        console.log(googlePage.url);
        googlePage.gotoGoogle();
    })
})