import { insertUser, selectUserByEmail } from "../data/userDataBase";
import { signupInputDTO, User } from "./entities/user";
import { generateToken } from "./services/authenticator";
import { compare, hash } from "./services/hashManager";
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

export const businessLogin = async(
    email: string,
    password: string
) => {

    if (!email || !password) { 
        throw new Error('"email" and "password" must be provided')
     }

     const user: User = await selectUserByEmail(email) 

      if (!user) { 
         throw new Error("Invalid credentials")
      }

      const passwordIsCorrect: boolean = await compare(password, user.password)

      if (!passwordIsCorrect) { 
         throw new Error("Invalid credentials")
      }

      const token: string = generateToken({
        id: user.id
     })

     return token

}