

interface PlayerValidation {
    name: string,
    required: boolean
    onlyLetters: boolean
    onlyLettersAndDash: boolean
    onlyLettersDashAndSpace: boolean
    onlyNumbers: boolean
    email: boolean
    minLenght: number
    maxLength: number
}

const playerValidationList : PlayerValidation[]  = [
    {
        name: "firstName",
        required: true,
        onlyLetters: false,
        onlyLettersAndDash: true,
        onlyLettersDashAndSpace: false,
        onlyNumbers: false,
        email: false,
        minLenght: 2,
        maxLength: 20,
    },
    {
        name: "lastName",
        required: true,
        onlyLetters: false,
        onlyLettersAndDash: false,
        onlyLettersDashAndSpace: true,
        onlyNumbers: false,
        email: false,
        minLenght: 2,
        maxLength: 20,
    },
    {
        name: "phone",
        required: false,
        onlyLetters: false,
        onlyLettersAndDash: false,
        onlyLettersDashAndSpace: false,
        onlyNumbers: true,
        email: false,
        minLenght: 6,
        maxLength: 20,
    },
    {
        name: "email",
        required: true,
        onlyLetters: false,
        onlyLettersAndDash: false,
        onlyLettersDashAndSpace: false,
        onlyNumbers: false,
        email: true,
        minLenght: 6,
        maxLength: 30,
    }
]

export default playerValidationList