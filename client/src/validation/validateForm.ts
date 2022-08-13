import { Player } from "../data/commonData";

const validateForm = (player: Player) => {
    const errors: Player | any  =  {}
    
    errors.requiredInputs = [
        "firstName", "lastName", "email"
    ]

    // Check required
    errors.requiredInputs?.forEach((item: string) => {
        
        Object.entries(player).forEach(([key, value]) => {
            
            if(key == item) {
                if(value == "") {
                    errors[key] = 'Required';
                } 
            }
        });
    }) 

    
    Object.entries(player).forEach(([key, value]) => {
        
        // Check only letters
        if(key == "firstName" || key == "lastName") {
            const checkLetter = onlyLettersAndDash(value)
            if(!checkLetter) {
                errors[key] = 'Only letters! Please check';
            }
        } 

        // Check only numbers
        if(key == "phone") {
            if(player.phone) { 
                const checkDigits = onlyNumbers(value)

                if(!checkDigits) {
                    errors[key] = 'Only numbers! Please check';
                } else if(value.length < 6) {
                    errors[key] = 'Phonenumber needs to have more than 6 numbers';
                }
            }
        }

        // Check email
        if(key == "email") {
            if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                errors[key] = 'Invalid email address'  // This comes before "Required", check!
            }
        }

    });

    return errors;
} 

// Approves only numbers
export const onlyNumbers = (str: string) => {
    return /^[0-9]+$/.test(str);
}

// Approves only letters A-Z
export const onlyLetters = (str: string) => {
    return /^[a-zA-Z]+$/.test(str);
}

// Approves only letters incl ÅÄÖ and "-"
export const onlyLettersAndDash = (str: string) => {
    return /^[A-Za-z\u00C0-\u00ff_-]*$/.test(str);
}

export default validateForm