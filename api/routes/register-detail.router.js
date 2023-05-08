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

registerDetailRouter.get('/:registerId',
  validatorHandler(idRegisterDetailSchema, 'params'),
  async (req, res, next) => {

    const { registerId } = req.params;

    try {

      const register = await service.findOne(registerId);

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

      res.status(201).json({ success: 'success', message: 'DETALLE DE REGISTRO CREADO' });

    } catch (error) {

      next(error);
    }
  }
);

registerDetailRouter.patch('/:registerId',
  validatorHandler(idRegisterDetailSchema, 'params'),
  validatorHandler(updateRegisterDetailSchema, 'body'),
  async (req, res, next) => {

    const { registerId } = req.params;
    const body = req.body;

    try {

      const register = await service.update(registerId, body);

      res.json({ success: 'success', message: 'DETALLE DE REGISTRO MODIFICADO' });

    } catch (error) {

      next(error);
    }
  }
);

registerDetailRouter.delete('/:registerId',
  validatorHandler(idRegisterDetailSchema, 'params'),
  async (req, res, next) => {

    const { registerId } = req.params;

    try {

      await service.delete(registerId);

      res.json({ success: 'success', message: 'DETALLE DE REGISTRO ELIMINADO' });

    } catch (error) {

      next(error);
    }
  }
);


module.exports = registerDetailRouter;