class googlePage {
    get url() { return "/" }

    gotoGoogle() {
        browser.url(this.url)
    }
}

module.exports = new googlePage();