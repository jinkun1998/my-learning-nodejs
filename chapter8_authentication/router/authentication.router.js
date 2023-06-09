const express = require('express')
const router = express.Router()
const authenticationController = require('./../controllers/authentication.controller')

router
    .post('/login', authenticationController.login)
    .post('/register', authenticationController.register)

module.exports = router