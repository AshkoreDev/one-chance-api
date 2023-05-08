const express = require('express');
const AdoptionDetailService = require('../services/adoption-detail.service.js');
const validatorHandler = require('../middlewares/validator.handler.js');
const { idAdoptionDetailSchema, createAdoptionDetailSchema, updateAdoptionDetailSchema } = require('../schemas/adoption-detail.schema.js');


const adoptionDetailRouter = express.Router();
const service = new AdoptionDetailService();

adoptionDetailRouter.get('/', async (req, res, next) => {

  try {

    const adoptions = await service.find();

    res.status(201).json(adoptions);

  } catch (error) {

    next(error);
  }
});

adoptionDetailRouter.get('/:adoptionId',
  validatorHandler(idAdoptionDetailSchema, 'params'),
  async (req, res, next) => {

    const { adoptionId } = req.params;

    try {

      const adoption = await service.findOne(adoptionId);

      res.status(201).json(adoption);

    } catch (error) {

      next(error);
    }
  }
);

adoptionDetailRouter.post('/',
  validatorHandler(createAdoptionDetailSchema, 'body'),
  async (req, res, next) => {

    const body = req.body;

    try {

      const adoption = await service.create(body);

      res.status(201).json({ success: 'success', message: 'DETALLE DE ADOPCIÓN CREADO' });

    } catch (error) {

      next(error);
    }
  }
);

adoptionDetailRouter.patch('/:adoptionId',
  validatorHandler(idAdoptionDetailSchema, 'params'),
  validatorHandler(updateAdoptionDetailSchema, 'body'),
  async (req, res, next) => {

    const { adoptionId } = req.params;
    const body = req.body;

    try {

      const adoption = await service.update(adoptionId, body);

      res.json({ success: 'success', message: 'DETALLE DE ADOPCIÓN MODIFICADO' });

    } catch (error) {

      next(error);
    }
  }
);

adoptionDetailRouter.delete('/:adoptionId',
  validatorHandler(idAdoptionDetailSchema, 'params'),
  async (req, res, next) => {

    const { adoptionId } = req.params;

    try {

      await service.delete(adoptionId);

      res.json({ success: 'success', message: 'DETALLE DE ADOPCIÓN ELIMINADO' });

    } catch (error) {

      next(error);
    }
  }
);


module.exports = adoptionDetailRouter;