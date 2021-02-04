import express from 'express'
import cors from 'cors'
import { login, signup } from './controller/userController'


const app = express()
app.use(express.json())
app.use(cors())

app.put('/user/signup', signup)
app.post('/user/login', login)


app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})
