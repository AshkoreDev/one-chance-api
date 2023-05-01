const express = require('express');
const RegisterDetailService = require('../services/register-detail.service.js');
const validatorHandler = require('../middlewares/validator.handler.js');
const { idRegisterDetailSchema, createRegisterDetailSchema, updateRegisterDetailSchema } = require('../schemas/register-detail.schema.js');


const registerDetailRouter = express.Router();
const service = new RegisterDetailService();


registerDetailRouter.get('/', async (req, res, next) => {

  try {

    const registers = await service.find();

    res.status(201).json(registers);

  } catch (error) {

    next(error);
  }
});


registerDetailRouter.get('/:registerDetailId',
  validatorHandler(idRegisterDetailSchema, 'params'),
  async (req, res, next) => {

    const { registerDetailId } = req.params;

    try {

      const register = await service.findOne(registerDetailId);

      res.status(201).json(register);

    } catch (error) {

      next(error);
    }
  }
);


registerDetailRouter.post('/',
  validatorHandler(createRegisterDetailSchema, 'body'),
  async (req, res, next) => {

    const body = req.body;

    try {

      const register = await service.create(body);

      res.status(201).json({ message: 'REGISTER DETAIL CREATED', data: register });

    } catch (error) {

      next(error);
    }
  }
);


registerDetailRouter.patch('/:registerDetailId',
  validatorHandler(idRegisterDetailSchema, 'params'),
  validatorHandler(updateRegisterDetailSchema, 'body'),
  async (req, res, next) => {

    const { registerDetailId } = req.params;
    const body = req.body;

    try {

      const register = await service.update(registerDetailId, body);

      res.json({ message: 'REGISTER DETAIL UPDATED', data: register });

    } catch (error) {

      next(error);
    }
  }
);


registerDetailRouter.delete('/:registerDetailId',
  validatorHandler(idRegisterDetailSchema, 'params'),
  async (req, res, next) => {

    const { registerDetailId } = req.params;

    try {

      await service.delete(registerDetailId);

      res.json({ message: 'REGISTER DETAIL DELETED', registerDetailId });

    } catch (error) {

      next(error);
    }
  }
);


module.exports = registerDetailRouter;