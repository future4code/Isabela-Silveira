export type user = {
    id: string,
    email: string,
    password: string
}

export type AuthenticationData = {
    id: string,
    role: string
}

export type loginInput = {
    email: string,
    password: string
}

export type adress = {
    street: string,
    neighbourhood: string,
    city:string,
    state: string
}