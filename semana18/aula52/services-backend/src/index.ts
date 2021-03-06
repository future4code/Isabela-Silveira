import express, { Express } from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";
import createUser from './endpoints/createUser';
import selectUserByEmail from './data/selectUserByEmail';
import login from './endpoints/login';
import getUserById from './endpoints/getUserById';
import { getAdressInfo } from './endpoints/getAdressInto';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

//endpoints:
app.post('/user/signup', createUser)
app.get('/user/:email', selectUserByEmail)
app.post('/login', login)
app.get("/user/profile", getUserById)
app.get('/adress/:cep', getAdressInfo)

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


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
