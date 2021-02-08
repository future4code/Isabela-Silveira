export const createPost = async (req:Request, res: Response) => {
    try {
       let message = "Success!"
 
       const { photo, description, type } = req.body
 
       const token: string = req.headers.authorization as string
 
       const tokenData: AuthenticationData = getTokenData(token)
 
       const id: string = generateId()
 
       
 
       res.status(201).send({ message })
 
    } catch (error) {
       let message = error.sqlMessage || error.message
       res.statusCode = 400
 
       res.send({ message })
    }
 }