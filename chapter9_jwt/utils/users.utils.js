const fs = require('fs')
const path = require('path')
const userFile = path.join(__dirname, '..', 'data', 'users.json')

const saveAll = async (users) => {
    try {
        await fs.promises.writeFile(userFile, JSON.stringify(users), 'utf8')
        return true
    } catch (err) {
        console.log(err)
        return false
    }
}

const getAll = () => {
    try {
        const data = require(userFile)
        return data
    } catch (err) {
        console.log(err)
        return err
    }
}

const updateOne = async (userNeedToUpdate) => {
    try {
        const users = getAll();
        const filteredUsers = users.filter(user => user.userid != userNeedToUpdate.userid)
        return saveAll([...filteredUsers, userNeedToUpdate])
    } catch (err) {
        console.log(err)
        return false
    }
}

const addOne = async (userNeedToAdd) => {
    try {
        const users = await getAll()
        return saveAll([...users, userNeedToAdd])
    } catch (err) {
        console.log(err)
        return false
    }
}

module.exports = { getAll, saveAll, updateOne, addOne }