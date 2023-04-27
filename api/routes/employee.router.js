const express = require('express');
const EmployeeService = require('./../services/employee.service.js');
const validatorHandler = require('./../middlewares/validator.handler.js');
const { idEmployeeSchema, createEmployeeSchema, updateEmployeeSchema } = require('./../schemas/employee.schema.js');


const employeeRouter = express.Router();
const service = new EmployeeService();


employeeRouter.get('/', async (req, res, next) => {

  try {

    const employees = await service.find();

    res.status(201).json(employees);

  } catch (error) {

    next(error);
  }
});


employeeRouter.get('/:employeeId',
  validatorHandler(idEmployeeSchema, 'params'),
  async (req, res, next) => {

    const { employeeId } = req.params;

    try {

      const employee = await service.findOne(employeeId);

      res.status(201).json(employee);

    } catch (error) {

      next(error);
    }
  }
);


employeeRouter.post('/',
  validatorHandler(createEmployeeSchema, 'body'),
  async (req, res, next) => {

    const body = req.body;

    try {

      const employee = await service.create(body);

      res.status(201).json({ message: 'EMPLOYEE CREATED', data: employee });

    } catch (error) {

      next(error);
    }
  }
);


employeeRouter.patch('/:employeeId',
  validatorHandler(idEmployeeSchema, 'params'),
  validatorHandler(updateEmployeeSchema, 'body'),
  async (req, res, next) => {

    const { employeeId } = req.params;
    const body = req.body;

    try {

      const employee = await service.update(employeeId, body);

      res.json({ message: 'EMPLOYEE UPDATED', data: employee });

    } catch (error) {

      next(error);
    }
  }
);


employeeRouter.delete('/:employeeId',
  validatorHandler(idEmployeeSchema, 'params'),
  async (req, res, next) => {

    const { employeeId } = req.params;

    try {

      const employee = await service.delete(employeeId);

      res.json({ message: 'EMPLOYEE DELETED', employee });

    } catch (error) {

      next(error);
    }
  }
);


module.exports = employeeRouter;