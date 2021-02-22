import { connection } from '../connection/connection'

export default async function selectUsrByEmail(email: string) {
    const result = await connection
    .select('*')
    .from('User_profile_cookenu')
    .where({ email });

    return result[0]
}