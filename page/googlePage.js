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
}

module.exports = new googlePage();