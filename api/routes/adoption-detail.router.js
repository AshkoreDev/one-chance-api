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

adoptionDetailRouter.get('/:adoptionDetailId',
  validatorHandler(idAdoptionDetailSchema, 'params'),
  async (req, res, next) => {

    const { adoptionDetailId } = req.params;

    try {

      const adoption = await service.findOne(adoptionDetailId);

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

      res.status(201).json({ message: 'ADOPTION DETAIL CREATED', data: adoption });

    } catch (error) {

      next(error);
    }
  }
);

adoptionDetailRouter.patch('/:adoptionDetailId',
  validatorHandler(idAdoptionDetailSchema, 'params'),
  validatorHandler(updateAdoptionDetailSchema, 'body'),
  async (req, res, next) => {

    const { adoptionDetailId } = req.params;
    const body = req.body;

    try {

      const adoption = await service.update(adoptionDetailId, body);

      res.json({ message: 'ADOPTION DETAIL UPDATED', data: adoption });

    } catch (error) {

      next(error);
    }
  }
);

adoptionDetailRouter.delete('/:adoptionDetailId',
  validatorHandler(idAdoptionDetailSchema, 'params'),
  async (req, res, next) => {

    const { adoptionDetailId } = req.params;

    try {

      await service.delete(adoptionDetailId);

      res.json({ message: 'ADOPTION DETAIL DELETED', adoptionDetailId });

    } catch (error) {

      next(error);
    }
  }
);


module.exports = adoptionDetailRouter;