import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generateToken } from "../service/authenticator";
import { generate } from "../service/idGenerator";


export default async function createUser(req: Request, res: Response): Promise<void> {
    try {

        const { email, password } = req.body 

        if (!email || !password) {
            throw new Error('Preencha os campos "name" e "password"')
        }

        if (!email.includes('@')) {
            res.statusCode = 406
            throw new Error('Formato de email inválido')
        }

        if (password.length < 6) {
            res.statusCode = 406
            throw new Error('A senha deve conter no mínimo 6 digitos!')
        }

        const id: string = generate()

        await insertUser(
            id,
            email,
            password
        );

        const token = generateToken(id);

        res.status(200).send({token});
        
    } catch (error) {
        res.status(400).send({message: error.message || error.sqlMessage})
    }
}