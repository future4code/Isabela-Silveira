import { insertUser } from "../data/userDataBase";
import { USER_ROLES } from "./entities/user";
import { generateToken } from "./services/authenticator";
import { hash } from "./services/hashManager";
import { generateId } from "./services/idGenerator";

export const businessSignup = async(
   name: string,
   email: string,
   password: string,
   role: USER_ROLES
) => {
    
    if (!name || !email || !password || !role) {
        throw new Error('Preencha os campos "name", "email", "password" e "role"')
    }

    if (!email.includes('@')) {
        throw new Error('Email inválido')
    }

    const id: string = generateId()

    const cypherPassword = await hash(password)

    await insertUser({
        id,
        name,
        email,
        password: cypherPassword,
        role
    })

    const token: string = generateToken({
        id,
        role
    })

    return token 

}