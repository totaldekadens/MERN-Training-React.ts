import { Player} from "../data/commonData";
import playerValidationList from "../data/validationList";

const validateForm = (player: Player) => {
    
    const errors: Player | any =  {}  // Fix type later
    
    Object.entries(player).forEach(([key, value]) => {
        
        playerValidationList.forEach((item) => {

            if(item.name == key) {

                // Required
                if(item.required && value == "") {
                    errors[key] = 'Required';
                }

                if(value != "") {

                    // Email
                    if(item.email && value != "") {
                        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            errors[key] = 'Invalid email address' 
                        }
                    }

                    // Only letters
                    if(item.onlyLetters) {
                        const checkLetter = onlyLetters(value)

                        if(!checkLetter) {
                            errors[key] = 'You are only allowed to use letters';
                        }
                    }

                    // Only letters and dash
                    if(item.onlyLettersAndDash) {
                        const checkLetterDash = onlyLettersAndDash(value)

                        if(!checkLetterDash ) {
                            errors[key] = 'You are only allowed to use letters and "-"';
                        }
                    }

                    // Only letters, dash and space
                    if(item.onlyLettersDashAndSpace) {
                        const checkLetterDashAndSpace = onlyLettersDashAndSpace(value)

                        if(!checkLetterDashAndSpace ) {
                            errors[key] = 'You are only allowed to use letters, space and "-"';
                        }
                    }

                    // Only numbers
                    if(item.onlyNumbers) {
                        const checkDigits = onlyNumbers(value)

                        if(!checkDigits) {
                            errors[key] = 'You are only allowed to use numbers';
                        }
                    }

                    // Min length
                    if(value.length < item.minLenght) {
                        errors[key] = `Minimum length is ${item.minLenght} characters`;
                    }

                    // Max length
                    if(value.length > item.maxLength) {
                        errors[key] = `Max length is ${item.maxLength} characters`;
                    }
                }
            }
        })
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

// Approves only letters incl ÅÄÖ, "-" and " "
export const onlyLettersDashAndSpace = (str: string) => {
    return /^[A-Za-z\s\u00C0-\u00ff_-]*$/.test(str);
}
export default validateForm