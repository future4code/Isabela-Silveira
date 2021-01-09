import express, {Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";


const app: Express = express(); // é toda a aplicação
app.use(express.json()); //essa função converte em json
app.use(cors()); //essa função é para evitar o erro do cors

type userAccount = {
    name: string,
    cpf: string,
    birthDate: string,
    balance: number,
    extract: extractAccount
}

type extractAccount = [
    {
        value: number,
        date: string,
        description: string
    }
] 

let users: userAccount[] = [
    {
        name: "Naruto Uzumaki",
        cpf: "151.522.255-17",
        birthDate: "10/10/2001",
        balance: 0,
        extract: [
            {
                value: 0,
                date: "01/06/20",
                description: "Rámen"
            }
        ]
    },

    {
        name: "Roronoa Zoro",
        cpf: "19.119.119-19",
        birthDate: "11/11/2001",
        balance: 0,
        extract: [
            {
                value: 0,
                date: "01/06/20",
                description: "Rámen"
            }
        ]
    },

    {
        name: "Tsunade Senju",
        cpf: "19.119.119-19",
        birthDate: "22/08/68",
        balance: 0,
        extract: [
            {
                value: 0,
                date: "01/06/20",
                description: "Rámen"
            }
        ]
    }
   
]

app.post('/users', (req: Request, res: Response) => {
    
    let errorCode: number = 400

    try {
        const reqBody: userAccount = {
            name: req.body.name,
            cpf: req.body.cpf,
            birthDate: req.body.birthDate,
            balance: req.body.balance,
            extract: req.body.extract
        }

        if(!reqBody.name || !reqBody.cpf || !reqBody.birthDate) {
            errorCode = 422;
            throw new Error('Algum campo está inválido. Preencha corretamente.')
        }

        users.push(reqBody);
        res.status(200).send({message: 'Usuário cadastrado com sucesso!'})

    } catch(error) {
        res.status(errorCode).send({message: error.message})
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