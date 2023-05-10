const Employee = require('./../data/employee')

const getAll = async () => {
    try {
        const data = await Employee.find({}).exec()
        return data ? data : []
    } catch (err) {
        console.log(err)
    }
}

const getOne = async (condition) => {
    try {
        const data = await Employee.findById(condition)
        return data
    } catch (err) {
        console.log(err)
    }
}

const addOne = async ({ firstName, lastName }) => {
    try {
        const result = await Employee.create({
            firstName,
            lastName
        })
        return true
    } catch (err) {
        console.log(err)
        return false
    }
}

const updateOne = async ({ id, firstName, lastName }) => {
    try {
        const result = await Employee.findOneAndUpdate({ _id: id }, { firstName: firstName, lastName: lastName }).exec()
        return true
    } catch (err) {
        console.log(err)
        return false
    }
}

const deleteOne = async (id) => {
    try {
        const result = await Employee.findOneAndDelete({ id: id })
        return true
    } catch (err) {
        console.log(err)
        return false
    }
}

module.exports = { getAll, getOne, addOne, updateOne, deleteOne }