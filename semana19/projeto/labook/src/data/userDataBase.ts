import { User } from "../business/entities/user";
import { connection } from "./connection";

export const insertUser = async(
    user: User
) => {

    await connection('labook_users')
    .insert({
       id: user.id,
       name: user.name,
       email: user.email,
       password: user.password
    })
}

export const selectUserByEmail = async(
    email: string
): Promise<User> => {
    try {

        const queryResult = await connection("labook_users")
        .select("*")
        .where({ email })

        return {
         id: queryResult[0].id,
         name: queryResult[0].name,
         email: queryResult[0].email,
         password: queryResult[0].password
        }

    } catch (error) {
        throw new Error(error.slqMessage || error.message)
    }
    
}