import { Request, Response } from "express";
import selectUserInfo from "../data/selectUserInfo";
import { getTokenData } from "../services/authenticator";

export default async function getUserInfo(req: Request, res: Response) {
    try {

        const token = req.headers.authorization as string 

        const AuthenticationData = getTokenData(token)

        const user = await selectUserInfo(AuthenticationData.id)

        if (!user) {
            throw new Error('Usuário não encontrado')
        }

        res.status(200).send({
            id: user.id,
            name: user.name,
            email: user.email
        })

    } catch (error) {
        res.status(400).send({message: error.message || error.sqlMessage });
    }
}