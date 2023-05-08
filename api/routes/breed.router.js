const express = require('express');
const BreedService = require('./../services/breed.service.js');
const validatorHandler = require('./../middlewares/validator.handler.js');
const { idBreedSchema, createBreedSchema, updateBreedSchema } = require('./../schemas/breed.schema.js');


const breedRouter = express.Router();
const service = new BreedService();

breedRouter.get('/', async (req, res, next) => {

  try {

    const breeds = await service.find();

    res.status(201).json(breeds);

  } catch (error) {

    next(error);
  }
});

breedRouter.get('/:breedId',
  validatorHandler(idBreedSchema, 'params'),
  async (req, res, next) => {

    const { breedId } = req.params;

    try {

      const breed = await service.findOne(breedId);

      res.status(201).json(breed);

    } catch (error) {

      next(error);
    }
  }
);

breedRouter.post('/',
  validatorHandler(createBreedSchema, 'body'),
  async (req, res, next) => {

    const body = req.body;

    try {

      const breed = await service.create(body);

      res.status(201).json({ success: 'success', message: 'RAZA CREADA' });

    } catch (error) {

      next(error);
    }
  }
);

breedRouter.patch('/:breedId',
  validatorHandler(idBreedSchema, 'params'),
  validatorHandler(updateBreedSchema, 'body'),
  async (req, res, next) => {

    const { breedId } = req.params;
    const body = req.body;

    try {

      const breed = await service.update(breedId, body);

      res.json({ success: 'success', message: 'RAZA MODIFICADA' });

    } catch (error) {

      next(error);
    }
  }
);

breedRouter.delete('/:breedId',
  validatorHandler(idBreedSchema, 'params'),
  async (req, res, next) => {

    const { breedId } = req.params;

    try {

      await service.delete(breedId);

      res.json({ success: 'success', message: 'RAZA ELIMINADA' });

    } catch (error) {

      next(error);
    }
  }
);


module.exports = breedRouter;