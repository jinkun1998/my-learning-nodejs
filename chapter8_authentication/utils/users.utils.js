const fs = require('fs')
const path = require('path')
const { stringify } = require('querystring')
const userFile = path.join(__dirname, '..', 'data', 'users.json')

const save = async (users) => {
    try {
        console.log(JSON.stringify(users))
        await fs.promises.writeFile(userFile, JSON.stringify(users), 'utf8')
        return true
    } catch (err) {
        console.log(err)
        return false
    }
}

module.exports = { save }