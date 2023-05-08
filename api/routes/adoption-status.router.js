const express = require('express');
const AdoptionStatusService = require('./../services/adoption-status.service.js');
const validatorHandler = require('./../middlewares/validator.handler.js');
const { idAdoptionStatusSchema, createAdoptionStatusSchema, updateAdoptionStatusSchema } = require('./../schemas/adoption-status.schema.js');


const adoptionStatusRouter = express.Router();
const service = new AdoptionStatusService();

adoptionStatusRouter.get('/', async (req, res, next) => {

  try {

    const status = await service.find();

    res.status(201).json(status);

  } catch (error) {

    next(error);
  }
});

adoptionStatusRouter.get('/:adoptionStatusId',
  validatorHandler(idAdoptionStatusSchema, 'params'),
  async (req, res, next) => {

    const { adoptionStatusId } = req.params;

    try {

      const status = await service.findOne(adoptionStatusId);

      res.status(201).json(status);

    } catch (error) {

      next(error);
    }
  }
);

adoptionStatusRouter.post('/',
  validatorHandler(createAdoptionStatusSchema, 'body'),
  async (req, res, next) => {

    const body = req.body;

    try {

      const status = await service.create(body);

      res.status(201).json({ success: 'success', message: 'ESTATUS DE ADOPCIÓN CREADO' });

    } catch (error) {

      next(error);
    }
  }
);

adoptionStatusRouter.patch('/:adoptionStatusId',
  validatorHandler(idAdoptionStatusSchema, 'params'),
  validatorHandler(updateAdoptionStatusSchema, 'body'),
  async (req, res, next) => {

    const { adoptionStatusId } = req.params;
    const body = req.body;

    try {

      const status = await service.update(adoptionStatusId, body);

      res.json({ success: 'success', message: 'ESTATUS DE ADOPCIÓN MODIFICADO' });

    } catch (error) {

      next(error);
    }
  }
);

adoptionStatusRouter.delete('/:adoptionStatusId',
  validatorHandler(idAdoptionStatusSchema, 'params'),
  async (req, res, next) => {

    const { adoptionStatusId } = req.params;

    try {

      await service.delete(adoptionStatusId);

      res.json({ success: 'success', message: 'ESTATUS DE ADOPCIÓN ELIMINADO' });

    } catch (error) {

      next(error);
    }
  }
);


module.exports = adoptionStatusRouter;