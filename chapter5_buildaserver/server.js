const http = require('http')

const PORT = process.env.PORT || 3500

const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'text/html')
    res.end('<h1>Hello world.</h1>')
})

server.listen(PORT, () => {
    console.log(`Server listened in port ${PORT}`)
})