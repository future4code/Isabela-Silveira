import { connection } from '../index'

export default async function selectUsrById(id: string) {
    const result = await connection
    .select('*')
    .from('User_profile')
    .where({ id });

    return result[0]
}