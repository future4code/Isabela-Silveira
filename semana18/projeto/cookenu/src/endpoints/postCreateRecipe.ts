import { Request, Response } from "express";
import insertRecipe from "../data/insertRecipe";
import { generate } from "../services/idGenerator";
import { Recipes } from "../types/types";

export default async function postCreateRecipe(req: Request, res: Response): Promise<void> {

    try {

        const id: string = generate()

        const { title, description } = req.body 

        if (!title || !description) {
            throw new Error('Preencha o título e a descrição')
        }

        const newRecipe: Recipes = {

        }

    } catch (error) {
        res.status(400).send({message: error.message || error.sqlMessage})

    }
}