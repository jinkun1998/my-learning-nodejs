const express = require('express')
const app = express()
const logger = require('../logger/logger')

// define middleware
const reqLogger = (req, res, next) => {
    // console.log(req.body)
    const logMsg = `${req.method}\t${req.headers.origin || 'localhost'}\t${req.url}`
    logger(logMsg)
    next()
}

module.exports = reqLogger