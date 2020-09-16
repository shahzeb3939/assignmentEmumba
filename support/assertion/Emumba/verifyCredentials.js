import covidSaversLogin from "../../../page/Emumba/covidSaversLogin"

export default () => {
    assert(covidSaversLogin.email.getValue(), 'tony.way@gmail.com');
    assert(covidSaversLogin.password.getValue(), '12345678');
}