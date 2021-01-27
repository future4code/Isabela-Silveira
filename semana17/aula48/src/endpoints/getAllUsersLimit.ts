import { Request, Response } from 'express';
import selectAllUsersLimit from '../data/selectAllUsersLimit';


export const getAllUsersLimit = async(req: Request,res: Response): Promise<void> =>{
    try {
       
        const users = await selectAllUsersLimit()
 
       if(!users.length){
          res.statusCode = 422
          throw new Error("Usuário não encontrado")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }