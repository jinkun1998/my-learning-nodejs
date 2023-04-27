const employeeData = require('./../data/employee.json')
const data = {
    employees: employeeData,
    setEmployees: function (data) { this.employees = data }
}

const getEmployees = (req, res) => {
    return res.json(data.employees)
}

const getEmployee = (req, res) => {
    const employee = data.employees.filter(employee => employee.id === req.body.id)
    return res.json(employee)
}

const addEmployee = (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({ messgae: 'name is required' })
    }

    const employee = {
        id: data.employees.reduce((prev, current) => (prev.id < current.id) ? current : prev, 0).id + 1,
        name: req.body.name
    }
    data.setEmployees([...data.employees, employee])
    console.log(employee)
    return res.status(201).json(data.employees)
}

const updateEmployee = (req, res) => {
    const employee = data.employees.filter(employee => employee.id === req.body.id)
    employee.name = res.body.name
    data.setEmployees(...data.employees, employee)
    return res.json({ messgae: 'success' })
}

const delemployee = (req, res) => {
    const employees = data.employees.filter(employee => employee.id != req.body.id)
    data.setEmployees(employees)
    return res.json(data.employees)
}

module.exports = { getEmployee, getEmployees, addEmployee, updateEmployee, delemployee }