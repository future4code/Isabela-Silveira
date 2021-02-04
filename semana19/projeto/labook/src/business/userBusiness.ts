import { insertUser } from "../data/userDataBase";
import { signupInputDTO } from "./entities/user";
import { generateToken } from "./services/authenticator";
import { hash } from "./services/hashManager";
import { generateId } from "./services/idGenerator";

export const businessSignup = async (
    input: signupInputDTO
) => {

    if (!input.name || !input.email || !input.password) {
        // res.statusCode = 406
        throw new Error('"name", "email" and "password" must be provided')
     }

     const id: string = generateId()

     const cypherPassword = await hash(input.password);

     await insertUser({
        id,
        name: input.name,
        email: input.email,
        password: cypherPassword
     })

     const token: string = generateToken({ id })

     return token

}