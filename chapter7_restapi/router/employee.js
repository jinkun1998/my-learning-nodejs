const express = require('express')
const employeeController = require('./../controllers/employeeController')
const router = express.Router()

router.route('/')
    .get(employeeController.getEmployee)
    .put(employeeController.updateEmployee)
    .delete(employeeController.delemployee)
    .post(employeeController.addEmployee)

router.route('/:id')
    .get(employeeController.getEmployee)

module.exports = router