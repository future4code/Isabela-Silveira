import { connection } from '../connection/connection';

export default async function selectUserInfo(id: string) {
    const result = await connection
    .select('*')
    .from('User_profile_cookenu')
    .where({ id });

    return result[0]
}