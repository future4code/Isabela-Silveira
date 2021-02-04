import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generateToken } from "../service/authenticator";
import { generateHash } from "../service/hashManager";
import { generate } from "../service/idGenerator";


export default async function createUser(req: Request, res: Response): Promise<void> {
    try {

        const { email, password, role } = req.body 

        if (!email || !password || !role) {
            throw new Error('Preencha todos os campos')
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

        const cypherPassword: string = await generateHash(password)

        await insertUser(
            id,
            email,
            cypherPassword
        );

        const token = generateToken({
            id, 
            role
        });

        res.status(200).send({token});
        
    } catch (error) {
        res.status(400).send({message: error.message || error.sqlMessage})
    }
}