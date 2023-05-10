const { v4: uuid } = require('uuid')
const fs = require('fs')
const path = require('path')

const logger = async (msg) => {
    const logPath = path.join(__dirname, 'logs')
    const logFile = 'log.txt'
    const logMsg = `${new Date()}\t${uuid()}\t${msg}\n`
    console.log(logMsg)
    try {
        if (!fs.existsSync(logPath))
            fs.promises.mkdir(logPath)
        await fs.promises.appendFile(path.join(logPath, logFile), logMsg)
    } catch (error) {
        console.log(error)
    }
}

module.exports = logger
