import { Player } from './commonData'

interface InputPlayerText {
    name: string,
    title: string
    type: string
    state?: string
    error?: string
}

export const handleInput = (state: Player, errors: Player) => {

    const InputPlayerTextList : InputPlayerText[]  = [
        {
            name: "firstName",
            title: "* FirstName",
            type: "text",
            state: state.firstName,
            error: errors.firstName,
        },
        {
            name: "lastName",
            title: "* LastName",
            type: "text",
            state: state.lastName,
            error: errors.lastName
        },
        {
            name: "phone",
            title: "Phone",
            type: "text",
            state: state.phone,
            error: errors.phone
        },
        {
            name: "email",
            title: "* Email",
            type: "text",
            state: state.email,
            error: errors.email
        }
    ]

    return InputPlayerTextList
}