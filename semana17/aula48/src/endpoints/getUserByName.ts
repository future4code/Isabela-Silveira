import { Request, Response } from 'express';
import selectUserByName  from '../data/selectUserByName'
import { user } from '../types/user';

export const getUserByName = async(req: Request, res: Response): Promise<void> => {

    try {

        const { name } = req.query as user

        if (!name) {
            throw new Error("'name' é obrigatório!")
        }

        const userName: any = await selectUserByName(name)

        res.status(200).send({userName})

    } catch (error) {
        console.log(error)
        res.send(error.sqlMessage || error.message)
    }
}