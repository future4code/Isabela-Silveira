export type user = {
    id: string,
    name: string,
    email: string,
    password: string
}

export type AuthenticationData = {
    id: string
}

export type Recipes = {
    id: string,
    title: string,
    description: string,
    creationDate?: Date,
    authorId: string
}
