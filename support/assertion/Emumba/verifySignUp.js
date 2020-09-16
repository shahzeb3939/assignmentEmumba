import covidSaversRegister from "../../../page/Emumba/covidSaversRegister"

export default () => {
    
    assert(covidSaversRegister.firstName.getValue(), 'Mandeep Dhillon');

    assert(covidSaversRegister.lastName.getValue(), 'Sandy');

    assert(covidSaversRegister.email.getValue(), 'tony.way@gmail.com');

    assert(covidSaversRegister.password.getValue(), '12345678');

    assert(covidSaversRegister.confirmPassword.getValue(), '12345678');
}