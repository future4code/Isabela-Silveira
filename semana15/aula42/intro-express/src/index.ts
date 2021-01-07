import express from 'express';
import cors from 'cors';

const app: Express = express(); // é toda a aplicação
app.use(express.json()); //essa função converte em json
app.use(cors()); //essa função é para evitar o erro do cors

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})