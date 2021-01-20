import express, { Express, Request, Response } from 'express';
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";
import { getAllUsers } from './endpoints/getAllUsers';
import { getUserByName } from './endpoints/getUserByName';
import { getUserByType } from './endpoints/getUserByType';
import { getUserInput } from './endpoints/getUserInput'
import { getAllUsersLimit } from './endpoints/getAllUsersLimit';

dotenv.config();

const app: Express = express();

app.use(express.json());

export const connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT || "3306"),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
  });

app.get('/user/all', getAllUsers)

app.get('/user/search', getUserByName)

app.get('/user/search/:type', getUserByType)

app.get('/user/order', getUserInput)

app.get('/user/all/limit', getAllUsersLimit)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});