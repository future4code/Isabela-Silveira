import express, {Express} from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import postSignUp from './endpoints/postSignUp';
import postLogin from './endpoints/postLogin';
import getUserInfo from './endpoints/getUserInfo';

const app: Express = express();

app.use(express.json());
app.use(cors());

//endpoints:
app.post('/signup', postSignUp)
app.post('/login', postLogin)
app.get('/user/profile', getUserInfo)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
