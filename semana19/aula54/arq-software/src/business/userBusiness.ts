import { compare } from "bcryptjs";
import { insertUser, selectUserByEmail } from "../data/userDataBase";
import { user, USER_ROLES } from "./entities/user";
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

export const businessLogin = async(
    email: string,
    password: string
) => {

    if (!email || !password) {
        throw new Error('Email e senha são obrigatórios')
    }

    const user: user = await selectUserByEmail(email)

    const passwordIsCorrect: boolean = await compare(password, user.password)

    if (!user || !passwordIsCorrect) {
        throw new Error('Usuário não encontrado ou senha incorreta')
    }

    const token: string = generateToken({
        id: user.id,
        role: user.role
    })

    return token

}

