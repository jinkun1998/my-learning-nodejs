const { responseOK, responseError } = require('./../utils/response.utils')
const employeeUtils = require('./../utils/employee.utils')

const getEmployees = (req, res) => {
    const employees = employeeUtils.getAll()
    return responseOK(res, 200, 'success', employees)
}

const getEmployee = (req, res) => {
    const employees = employeeUtils.getAll()
    const employee = employees.find(employee => employee.id === parseInt(req.params.id))
    return responseOK(res, 200, 'success', employee)
}

const addEmployee = async (req, res) => {
    if (!req.body.name) {
        return responseError(res, 400, 'name is required')
    }

    const employees = employeeUtils.getAll()
    console.log(employees)
    const employee = {
        id: employees.reduce((prev, current) => (prev < current.id) ? current.id : prev.id, 0) + 1,
        name: req.body.name
    }

    // add
    await employeeUtils.addOne(employee)

    return responseOK(res, 201, 'success')
}

const updateEmployee = (req, res) => {
    const employees = employeeUtils.getAll()
    const employee = employees.find(employee => employee.id === req.body.id)
    if (!employee)
        return responseError(res, 400, 'not found')
    employee.name = req.body.name

    // update
    employeeUtils.updateOne(employee)

    return responseOK(res, 200, 'success')
}

const delemployee = (req, res) => {
    const employees = employeeUtils.getAll()
    const filteredEmployees = employees.filter(employee => employee.id != req.body.id)

    // delete
    employeeUtils.saveAll(filteredEmployees)

    return responseOK(res, 200, 'success')
}

module.exports = { getEmployee, getEmployees, addEmployee, updateEmployee, delemployee }