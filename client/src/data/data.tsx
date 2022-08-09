
export interface Player {
    firstName: string
    lastName: string
    email: string
    phone?: string
    image?: string
    _id?: any
}

export interface User {
    username: string
    email: string
    password: string
}

export interface Errors {
    firstName: string
    lastName: string
    email: string
    phone?: string
    image?: string
    _id?: any
}

export interface DefaultValues {
    firstName: string
    lastName: string
    email: string
    phone?: string
    image?: string
    _id?: any
}