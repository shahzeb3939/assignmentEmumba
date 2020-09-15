import { assert } from "chai";
import googlePage from "../../../page/googlePage"

export default (searchQuery) => {
    assert(googlePage.pageTitle(), `${searchQuery} - Google Search`);
}