import { expect } from "chai"
import formSubmit from "../../../page/Emumba/formSubmit"

export default () => {
    
    expect(formSubmit.titleFormField.getValue(), 'Posting a flyer');
    
    expect(formSubmit.detailsFormField.getValue(), '1. Be honest\n2. Remember the human\n3. Behave like you would in real life\n4. Search for duplicates before posting\n5. Read the first rule again');
    
    expect(formSubmit.phoneFormField.getValue(), '30012345678');
    
    expect(formSubmit.addressFormField.getValue(), 'Emumba Pvt. Limited, Korang Road I-10/3 Islamabad.');
    
    for (var i=0;i<3;i++) {
        switch (i) {
            case 0:
                expect($(`div[role="combobox"] div[data-tag-index="${i}"] span.MuiChip-label`).getText(), 'hello there');
                break;
            case 1:
                expect($(`div[role="combobox"] div[data-tag-index="${i}"] span.MuiChip-label`).getText(), 'covid-19');
                break;
            case 2:
                expect($(`div[role="combobox"] div[data-tag-index="${i}"] span.MuiChip-label`).getText(), 'zara hut k');
                break;
        }
    }
}