class googlePage {
    get url() { return "https://www.google.com/" }

    gotoGoogle() {
        browser.url(this.url)
    }
}

module.exports = new googlePage();