const fsPromises = require('fs').promises
const path = require('path')

const fsAsync = async () => {
    try {
        const replyPath = path.join(__dirname, 'files', 'reply.txt')
        // read file data
        const data = await fsPromises.readFile(replyPath, 'utf8')
        console.log(data)
        // delete existing file
        await fsPromises.unlink(replyPath)
        // append file (create new file if filename doesn't exist)
        await fsPromises.writeFile(replyPath, data + '\n\nFile was written again', 'utf8')
        // rename file
        await fsPromises.rename(replyPath, replyPath)
        // open again to read
        const newData = await fsPromises.readFile(replyPath, 'utf8')
        console.log(newData)
    } catch (error) {
        console.error(error)
    }
}

fsAsync();

process.on('uncaughtException', error => {
    console.log(error)
    process.exit(1)
})