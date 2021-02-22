import { Request, Response } from "express";
import selectUsrByEmail from "../data/selectUserByEmail";
import { generateToken } from "../services/authenticator";
import { compare } from "../services/hashManager";

export default async function login(req: Request, res: Response): Promise<void> {
    try {

        const { email, password } = req.body 

        if (!email.includes('@')) {
            throw new Error('Informe um email válido');
        }

        if(!password) {
            throw new Error('Informe sua senha') 
        }

        const user = await selectUsrByEmail(email)

        if (!user) {
            throw new Error('Usuário não encontrado')
        }

        const passwordIsCorrect: boolean = await compare(password, user.password)

        if(!passwordIsCorrect) {
            throw new Error('Senha incorreta.')
        }

        const token = generateToken({
            id: user.id
        })

        res.status(200).send({token})

    } catch (error) {
        res.status(400).send({message: error.message || error.sqlMessage});
    }
}