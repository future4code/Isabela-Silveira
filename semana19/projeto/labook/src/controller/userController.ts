import { Request, Response } from "express";
import { signupInputDTO, User } from "../business/entities/user";
import { businessLogin, businessSignup } from "../business/userBusiness";
import { selectUserByEmail } from "../data/userDataBase";


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

 export const login = async (req: Request, res: Response) => {
   try {
      let message = "Success!"

      const { email, password } = req.body

      const token = await businessLogin(email, password)

      res.status(200).send({ message, token })

   } catch (error) {
      let message = error.sqlMessage || error.message
      res.statusCode = 400

      res.send({ message })
   }
}

