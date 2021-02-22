import { connection } from "../connection/connection";

export default async function insertUser(
    id: string,
    name: string,
    email: string,
    password: string
) {
    await connection.insert({
        id,
        name,
        email,
        password
    }).into('User_profile_cookenu')
}