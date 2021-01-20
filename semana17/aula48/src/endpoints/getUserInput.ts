import { Request, Response } from 'express';
import selectUserInput  from '../data/selectUserInput';
import { user } from '../types/user';

export const getUserInput = async(req: Request, res: Response): Promise<void> => {

    try {

        const { orderBy, orderType } = req.query as user

        // if (!name) {
        //     throw new Error("'name' é obrigatório!")
        // }

        if (orderBy !== 'type' && orderBy !== 'name') {
            throw new Error("'name' ou 'type' são obrigatórios!")
        }

        if (orderType !== "ASC" && orderType !== "DESC") {
            throw new Error("Valores válidos para 'orderType' são 'ASC' ou 'DESC'!")
        }

        const userName: any = await selectUserInput(
            orderBy,
            orderType
        )

        res.status(200).send({userName})

    } catch (error) {
        console.log(error)
        res.send(error.sqlMessage || error.message)
    }
} 