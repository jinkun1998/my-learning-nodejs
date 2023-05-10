const express = require('express')
const employeeController = require('../controllers/employee.controller')
const router = express.Router()

router.route('/')
    .get(employeeController.getEmployees)
    .put(employeeController.updateEmployee)
    .delete(employeeController.delemployee)
    .post(employeeController.addEmployee)

router.route('/:id')
    .get(employeeController.getEmployee)

module.exports = router