const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employee.controller')
const verifyToken = require('../middleware/verifyToken.middleware')

router.route('/')
    .get(verifyToken, employeeController.getEmployees)
    .put(verifyToken, employeeController.updateEmployee)
    .delete(verifyToken, employeeController.delemployee)
    .post(verifyToken, employeeController.addEmployee)

router.route('/:id')
    .get(verifyToken, employeeController.getEmployee)

module.exports = router