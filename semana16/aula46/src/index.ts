import express, { Express, Request, Response } from 'express';
import { AddressInfo } from 'net';
import knex from 'knex';
import dotenv from 'dotenv'

dotenv.config()
const app: Express = express();

app.use(express.json());

const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || '3306'),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
    
});


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

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });