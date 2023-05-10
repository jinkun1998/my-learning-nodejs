const { responseOK, responseError } = require('./../utils/response.utils')
const employeeUtils = require('./../utils/employee.utils')
const mongoose = require('mongoose')

const getEmployees = async (req, res) => {
    const employees = await employeeUtils.getAll()
    return responseOK(res, 200, 'success', employees)
}

const getEmployee = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return responseError(res, 400, 'id is invalid type')
    }
    const employee = await employeeUtils.getOne({ _id: req.params.id })
    if (!employee) {
        return responseError(res, 404, 'not found')
    }
    return responseOK(res, 200, 'success', employee)
}

const addEmployee = async (req, res) => {
    const { firstName, lastName } = req.body
    if (!firstName || !lastName) {
        return responseError(res, 400, 'firstName/lastName is required')
    }

    const result = await employeeUtils.addOne({ firstName, lastName })
    if (!result)
        return responseError(res, 400, 'unsuccess')
    else
        return responseOK(res, 201, 'success')
}

const updateEmployee = async (req, res) => {
    // update
    if (!await employeeUtils.updateOne(employee)) {
        return responseError(res, 400, 'failed')
    }
    else {
        return responseOK(res, 200, 'success')
    }
}

const delemployee = async (req, res) => {
    // update
    if (!await employeeUtils.deleteOne(employee)) {
        return responseError(res, 400, 'failed')
    }
    else {
        return responseOK(res, 200, 'success')
    }
}

module.exports = { getEmployee, getEmployees, addEmployee, updateEmployee, delemployee }