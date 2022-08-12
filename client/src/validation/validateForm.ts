import { Player } from "../data/commonData";

const validateForm = (player: Player) => {
    const errors: Player | any  =  {}
    
    errors.requiredInputs = [
        "firstName", "lastName", "email"
    ]

    // Check required
    errors.required?.forEach((item: string) => {
        Object.entries(player).forEach(([key, value]) => {
            if(key == item) {
                if(value == "") {
                    errors[key] = 'Required';
                }
            }
        });
    }) 

    // Check only letters and numbers
    Object.entries(player).forEach(([key, value]) => {
        if(key == "firstName" || key == "lastName") {
            const checkLetter = onlyLetters(value)
            if(!checkLetter) {
                errors[key] = 'Only letters! Please check';
            }
        } 

        if(key == "phone") {
            const checkDigits = onlyNumbers(value)

            if(!checkDigits) {
                errors[key] = 'Only numbers! Please check';
            }
        }
    });

    // Email
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(player.email)) {
        errors.email = 'Invalid email address'
    }

    // Phone
    if(player.phone) {
        
        if(player.phone.length < 6) {
            errors.phone = 'Phonenumber needs to have more than 6 numbers';
        } 
    }

    return errors;
} 


export const onlyNumbers = (str: string) => {
    return /^[0-9]+$/.test(str);
}

export const onlyLetters = (str: string) => {
    return /^[a-zA-Z]+$/.test(str);
}

export default validateForm