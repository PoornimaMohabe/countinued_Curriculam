const express = require('express')
const { register, login, getalluser, } = require('../controller/userController')

const { refreshToken, logout } = require('../controller/refreshToken')

const userRouter = express.Router()

userRouter.post('/register', register)

userRouter.post('/login', login)

userRouter.get('/alluser', getalluser)


userRouter.post("/refresh-token", refreshToken);
userRouter.post("/logout", logout);


module.exports = {
    userRouter
}