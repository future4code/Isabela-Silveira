import { connection } from '../index'

export default async function selectAllUsersLimit():Promise<any> {
    const result = await connection.raw(`
       SELECT * FROM aula48_exercicio LIMIT 5 OFFSET 10;
    `)
 
    return result[0]
 }