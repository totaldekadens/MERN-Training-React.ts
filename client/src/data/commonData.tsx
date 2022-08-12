
export interface User {
    username: string
    email: string
    password: string
}

export interface Player {
    firstName: string
    lastName: string
    email: string
    phone?: string
    image?: string
    _id?: any
    requiredInputs?: string[]
}