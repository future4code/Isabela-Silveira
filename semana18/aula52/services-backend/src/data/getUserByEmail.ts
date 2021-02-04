import { connection } from "..";

export async function getUserByEmail(email: string) {

    const result = await 
    connection
    .select("*")
    .from("User_profile")
    .where({email});

    return result[0];
}
