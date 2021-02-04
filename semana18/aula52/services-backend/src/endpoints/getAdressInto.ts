import { Request, Response } from "express";
import { adress } from "../types/types";
import { getAddressMyCep } from '../service/adressManager'

export async function getAdressInfo(req: Request, res: Response) {
    let errorCode: number = 400
    try {

        const cep = req.params.cep;

        if(isNaN(Number(req.params.cep)) || req.params.cep.includes('-')) {
            throw new Error('Digite somente números')
        }

        const address: adress = await getAddressMyCep(cep);

        res.status(200).send(address);

    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}