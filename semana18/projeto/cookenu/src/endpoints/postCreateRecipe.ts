import { Request, Response } from "express";
import { generate } from "../services/idGenerator";
import { recipe } from "../types/types";

export default async function postCreateRecipe(req: Request, res: Response): Promise<void> {

    try {

        const id: string = generate()
        const { title, description, creationDate, authorId } = req.body 

    } catch (error) {
        res.status(400).send({message: error.message || error.sqlMessage})

    }
}