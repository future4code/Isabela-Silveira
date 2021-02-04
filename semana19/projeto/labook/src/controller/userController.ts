import { Request, Response } from "express";
import { signupInputDTO } from "../business/entities/user";
import { businessSignup } from "../business/userBusiness";


export const signup = async (req: Request, res: Response) => {
    try {

       let message = "Success!"

       const input: signupInputDTO = {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
       } 

       const token = await businessSignup(input)
 
       res.status(201).send({ message, token })
 
    } catch (error) {
       res.statusCode = 400
       let message = error.sqlMessage || error.message
 
       res.send({ message })
    }
 }


