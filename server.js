import cors from 'cors'
import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.listen(3000)
app.use(cors())
app.use(express.json())

//LIST USERS
app.get('/usuarios', async(req, res) =>{
    const users = await prisma.user.findMany()
    res.status(200).json(users)
})

//CREATE USERS
app.post('/usuarios', async (req, res) => {
    const user = await prisma.user.create({
        data:{
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })
    console.log(user)
    res.status(201).json(user)
})

//EDIT USERS
app.put('/usuarios/:id', async (req, res) => {
    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        
        data:{
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })
    console.log(user)
    res.status(201).json(user)
})

app.delete('/usuarios/:id',async (req, res) => {
    await prisma.user.delete({
        where:{
            id: req.params.id
        }
    })
    res.status(200).json( {message: "Usuarios deletado com sucesso"})
})
