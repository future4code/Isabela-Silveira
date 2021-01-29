import { connection } from '../connection/connection';

export default async function insertRecipe(
    id: string,
    title: string,
    description: string,
    creationDate: Date,
    authorId: string
) {
    await connection.insert({
        id,
        title,
        description,
        creationDate,
        author_id: authorId
    }).into('recipe_cookenu')
}