const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log('enter goto')
    res.send('<h1>this is goto page</h1>')
})

router.get('/about(.html)?', (req, res) => {
    console.log('enter about')
    res.send('<h1>this is about page</h1>')
})

router.get('/*', (req, res) => {
    console.log('enter 404')
    res.status(404).send('<h1>there is nothing to do</h1>')
})

module.exports = router