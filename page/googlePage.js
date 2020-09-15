class googlePage {
    get url() { return "https://www.google.com/" }
    get googleImage() { return $(`img[alt="Google"]`) }
    get googleSearchInputField() { return $('input.gLFyf.gsfi') }
    get googleSearchInputButton() { return $('div.aajZCb input.gNO89b') }

    pageTitle() {
        return browser.getTitle();
    }

    gotoGoogle() {
        browser.url(this.url)
    }
}

module.exports = new googlePage();