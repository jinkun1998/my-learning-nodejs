const fs = require('fs')

fs.readFile('./files/stater.txt', (error, data) => {
    if (error)
        throw error
    console.log(data)
})