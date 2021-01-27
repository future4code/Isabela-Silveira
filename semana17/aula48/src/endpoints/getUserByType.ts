import { Request, Response } from 'express';
import { selectUserByType } from '../data/selectUserByType';
import { user } from '../types/user';

export const getUserByType = async(req: Request, res: Response): Promise<void> => {

    try {

        const { type } = req.params as user

        if (!type) {
            throw new Error("'type' é obrigatório!")
        }

        const userType: any = await selectUserByType(type)

        res.status(200).send({userType})

    } catch (error) {
        console.log(error)
        res.send(error.sqlMessage || error.message)
    }
}