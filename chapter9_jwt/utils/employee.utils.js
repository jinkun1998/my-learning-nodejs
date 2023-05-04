const fs = require('fs')
const path = require('path')
const employeePath = path.join(__dirname, '..', 'data', 'employee.json')

const getAll = () => {
    try {
        const data = require(employeePath)
        return data ? data : []
    } catch (err) {
        console.log(err)
    }
}

const addOne = async (employeeToAdd) => {
    try {
        const employees = getAll()
        await fs.promises.writeFile(employeePath, JSON.stringify([...employees, employeeToAdd]))
        return true
    } catch (err) {
        console.log(err)
        return false
    }
}

const updateOne = async (employeeToUpdate) => {
    try {
        const employees = getAll()
        const filteredEmployees = employees.filter(employee => employee.id !== employeeToAdd.id)
        await fs.promises.writeFile(employeePath, JSON.stringify([...filteredEmployees, employeeToAdd]))
        return true
    } catch (err) {
        console.log(err)
        return false
    }
}

const saveAll = async (employees) => {
    try {
        await fs.promises.writeFile(employeePath, JSON.stringify(employees))
        return true
    } catch (err) {
        console.log(err)
        return false
    }
}

module.exports = { getAll, addOne, updateOne, saveAll }