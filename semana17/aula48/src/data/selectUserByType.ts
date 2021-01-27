import { connection } from '../index'

export const selectUserByType = async (type: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM aula48_exercicio WHERE type LIKE '${type}';
    `)

    return result[0]
}