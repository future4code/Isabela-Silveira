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