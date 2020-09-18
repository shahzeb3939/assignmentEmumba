import basePage from "../Base/basePage"

class googlePage extends basePage {
    get url() { return "https://www.google.com/" }
    get googleImage() { return $(`img[alt="Google"]`) }
    get googleSearchInputField() { return $('input.gLFyf.gsfi') }
    get googleSearchInputButton() { return $('div.aajZCb input.gNO89b') }
    get fullCastTitle() { return $('.subpage_title_block > div > h1') }

    clickOnLink(link) {
        switch(link) {
            case 'seeFullCast':
                $('#titleCast .see-more a').click();
              break;
            default:
                return $('');
          }
    }

    linkReturn(link) {
        switch(link) {
            case "imdbLink":
                return $('#search a[href="https://www.imdb.com/title/tt8398600/"]');
              break;
            default:
                return '';
          }
    }

    pageTitle() {
        return browser.getTitle();
    }

    gotoGoogle() {
        browser.url(this.url)
    }
}

module.exports = new googlePage();