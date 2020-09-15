class googlePage {
    get url() { return "https://www.google.com/" }
    get googleImage() { return $(`img[alt="Google"]`) }

    gotoGoogle() {
        browser.url(this.url)
    }
}

module.exports = new googlePage();