const express = require('express')
const app = express()
const PORT = process.env.PORT || 3500

app.get('/', (req, res) => {
    res.send('<h1>welcome to my world</h1>')
})

app.get('/about(.html)?', (req, res) => {
    res.status(404).send('<h1>this is about page</h1>')
})

app.get('/*', (req, res) => {
    res.status(404).send('<h1>there is nothing to do</h1>')
})

app.listen(PORT, () => {
    console.log(`server listened on port ${PORT}`)
})