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

      res.status(201).json({ success: 'success', message: 'EMPLEADO CREADO' });

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

      res.json({ success: 'success', message: 'EMPLEADO MODIFICADO' });

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

      await service.delete(employeeId);

      res.json({ success: 'success', message: 'EMPLEADO ELIMINADO' });

    } catch (error) {

      next(error);
    }
  }
);


module.exports = employeeRouter;