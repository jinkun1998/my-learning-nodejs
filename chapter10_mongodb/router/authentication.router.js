const express = require('express')
const router = express.Router()
const verifyToken = require('./../middleware/verifyToken.middleware')
const loginController = require('./../controllers/authentication/login.controller')
const registerController = require('./../controllers/authentication/register.controller')
const refreshTokenController = require('./../controllers/authentication/refreshToken.controller')
const logoutController = require('./../controllers/authentication/logout.controller')

router
    .post('/login', loginController.loginHandler)
    .post('/register', registerController.registerHandler)
    .post('/refreshToken', refreshTokenController.refreshTokenHandler)
    .post('/logout', verifyToken, logoutController.logoutHandler)

module.exports = router