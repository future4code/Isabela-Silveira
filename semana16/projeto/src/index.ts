import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo }
from "net";
import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

const connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT || "3306"),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
  });

  const createUserTable = async (): Promise<void> => {
      try {
        await connection.raw(`
            CREATE TABLE Users (
                id INT PRIMARY KEY AUTO_INCREMENT,
                name VARCHAR(255) NOT NULL,
                nickname VARCHAR(255) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL
            );
        `)

      } catch (error) {
        console.log(error.sqlMessage || error.message)
      }
  }

  // createUserTable();

  const createNewUser = async (name: string, nickname: string, email: string): Promise<void> => {

    try {
      await connection
      .insert({
        name:  name,
        nickname: nickname,
        email: email
      })
      .into('Users')

      // console.log(`Usuário criado com sucesso`);

    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  // createNewUser('Isabela', 'Bela', 'bela@email.com');

app.put('/user', async (req: Request, res: Response) => {
    let errorCode: number = 400

    try {

      const { name, nickname, email } = req.body;

      const newUser = createNewUser(
        name,
        nickname,
        email
      )

      if (!newUser) {
        res.statusCode = 406
        throw new Error("Prencha os campos corretamente!")
      }

      await createNewUser();

      res.status(201).send('Usuário criado com sucesso')

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});