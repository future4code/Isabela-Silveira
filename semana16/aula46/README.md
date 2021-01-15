1)

a) Esse método permite enviar uma query para o banco de dados.

b) 

const getActorByName = async (name: string): Promise<any> => {
    try {

      const result: any = await connection.raw(`
        SELECT * FROM Actor WHERE name = '${name}'
      `)

      console.log(result[0][0])
      return result[0][0]

    } catch (error) {
      console.log(error.sqlMessage || error.message)
    }
}

getActorByName('Glória Pires')