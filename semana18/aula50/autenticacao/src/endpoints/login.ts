import { Request, Response } from "express";
import { generateToken } from "../service/authenticator";
import { loginInput } from "../types/types";
import { getUserByEmail } from "../data/getUserByEmail";


export default async function login(req: Request, res: Response): Promise<void> {
    try {
        
        const { email, password } = req.body as loginInput

        if (!email || !email.includes('@')) {
            throw new Error('Informe um email válido!');
        }

        if(!password) {
            throw new Error('Informe sua senha')
        }


        
        const user = await getUserByEmail(email)

        if(!user) {
            throw new Error("Usuário não encontrado")
        }

        if(user.password !== password) {
            throw new Error("Senha incorreta")
        }

        const token = generateToken(user.id);
        res.status(200).send({token})

    } catch (error) {
        res.status(400).send({message: error.message});
    }
}