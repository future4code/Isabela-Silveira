import { connection } from '../index'

export default async function selectUserInput(orderBy: string, orderType: string):Promise<any> {

    const result = await connection.raw(`
       SELECT * FROM aula48_exercicio ORDER BY ${orderBy} ${orderType};
    `)
 
    return result[0]
 }