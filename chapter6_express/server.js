const express = require('express')
const app = express()
const PORT = process.env.PORT || 3500

app.get('/', (req, res) => {
    res.send('<h1>welcome to my world</h1>')
})

app.get('/about(.html)?', (req, res) => {
    res.status(404).send('<h1>this is about page</h1>')
})

// define middleware
const one = (req, res, next) => {
    console.log('middleware 1')
    next()
}

const two = (req, res, next) => {
    console.log('middleware 2')
    next()
}

const three = (req, res, next) => {
    console.log('middleware 3')
    res.send('<h1>finished middleware</h1>')
}

// apply middleware
app.get('/middleware', [one, two, three])

app.get('/*', (req, res) => {
    res.status(404).send('<h1>there is nothing to do</h1>')
})

app.listen(PORT, () => {
    console.log(`server listened on port ${PORT}`)
})