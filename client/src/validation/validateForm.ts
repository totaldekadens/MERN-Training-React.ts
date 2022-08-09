import { Player, Errors } from "../data/data";

const validateForm = (player: Player) => {
    const errors: Errors | any  =  {};  // Check the "any" later

    if(player.firstName == "") {
        errors.firstName = 'Required';
    } 

    if(player.lastName == "") {
        errors.lastName = 'Required';
    } 

    if(player.email == "") {
        errors.email = 'Required';
        
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(player.email)) {
        errors.email = 'invalid email address'
    }

    // Check if the number validation still work after the change
    if(player.phone) {
        const checkDigits = onlyNumbers(player.phone)

        if(!checkDigits) {
            errors.phone = 'Only numbers! Please check';
        } 
        
        else if(player.phone.length < 6) {
            errors.phone = 'Phonenumber needs to h more than 6 numbers';
        } 
    }

    return errors;
} 


export const onlyNumbers = (str: string) => {
    return /^[0-9]+$/.test(str);
}

export default validateForm