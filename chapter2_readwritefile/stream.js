const fs = require('fs')

const readStream = fs.createReadStream('./files/lorem.txt', 'utf8')
const writeStream = fs.createWriteStream('./files/newLorem.txt', 'utf8')

// 1
readStream.on('data', (dataChunk) => {
    writeStream.write(dataChunk)
})

// 2
readStream.pipe(writeStream)