const express = require('express')
const { register, login, getalluser, } = require('../controller/userController')

const userRouter = express.Router()

userRouter.post('/register', register)

userRouter.post('/login', login)

userRouter.get('/alluser', getalluser)



module.exports = {
    userRouter
}