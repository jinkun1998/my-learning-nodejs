const http = require('http')
const server = http.createServer((request, response) => {
    response.setHeader('content-type', 'application/json')
})
server.listen(3001, () => {
    console.log('server is connected to port 3001')
})