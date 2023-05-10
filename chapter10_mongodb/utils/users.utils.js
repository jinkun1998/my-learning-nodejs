const User = require('./../data/user')

const getAll = async () => {
    try {
        const data = await User.find({}).exec()
        return data
    } catch (err) {
        console.log(err)
    }
}

const getOne = async (condition) => {
    try {
        const data = await User.findOne(condition).exec()
        return data
    } catch (err) {
        console.log(err)
    }
}

const updateOne = async (condition, data) => {
    try {
        await User.findOneAndUpdate(condition, data).exec()
        return true
    } catch (err) {
        console.log(err)
        return false
    }
}

const addOne = async ({ userid, password }) => {
    try {
        await User.create({
            userid: userid,
            password: password,
            refreshToken: ''
        })
        return true
    } catch (err) {
        console.log(err)
        return false
    }
}

module.exports = { getAll, getOne, updateOne, addOne }