const { format } = require('date-fns')
const { v4: uuid } = require('uuid')
const fs = require('fs')
const path = require('path')

const logEvent = async (msg) => {
    const datetime = format(new Date, 'dd-MM-yyyy\thh:mm:ss')
    const logData = `${datetime}\t${uuid()}\t${msg}`
    const logPath = path.join(__dirname, 'logs')
    try {
        if (!fs.existsSync(logPath))
            await fs.promises.mkdir(logPath)

        console.log(logData)
        await fs.promises.appendFile(path.join(__dirname, 'logs', 'logEvent.txt'), `\n${logData}`, 'utf8')
    } catch (err) {
        console.log(err)
    }
}

module.exports = logEvent