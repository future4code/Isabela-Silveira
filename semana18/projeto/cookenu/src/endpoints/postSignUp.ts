import { Request, Response } from 'express';
import insertUser from '../data/insertUser';
import { generateToken } from '../services/authenticator';
import { generateHash } from '../services/hashManager';
import { generate } from '../services/idGenerator';
import { user } from '../types/types';

export default async function postSignUp(req: Request, res: Response): Promise<void> {
    try {

        const id: string = generate()

        const { name, email, password } = req.body as user

        if (!name) {
            res.statusCode = 406
            throw new Error('Informe seu nome')
        }

        if (!email.includes('@')) {
            res.statusCode = 406
            throw new Error('Formato de email inválido')
        }
        
        if (password.length < 6) {
            res.statusCode = 406
            throw new Error('A senha deve ter no mínimo 6 caractéres')
        }

        const cypherPassword: string = await generateHash(password)

        await insertUser(
            id,
            name,
            email,
            cypherPassword
        )

        const token = generateToken({ id });

        res.status(200).send({token});

    } catch (error) {       
        let { message } = error

        if (message.includes("for key 'email'")) {
            res.statusCode = 409
            message = "email já cadastrado"
        }

        res.send({message: message || error.message || error.sqlMessage})
    }
}