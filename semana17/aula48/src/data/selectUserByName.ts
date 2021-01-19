import { connection } from '../index'

export const selectUserByName = async (name: string):Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM aula48_exercicio WHERE name LIKE "%${name}%";
    `)

    return result[0]
} 