import { connection } from '../index'

export default async function selectUsrByEmail(email: string) {
    const result = await connection
    .select('*')
    .from('User_profile')
    .where({ email });

    return result[0]
}