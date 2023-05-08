const express = require('express');
const SpecieServie = require('./../services/specie.service.js');
const validatorHandler = require('./../middlewares/validator.handler.js');
const { idSpecieSchema, createSpecieSchema, updateSpecieSchema } = require('./../schemas/specie.schema.js');


const specieRouter = express.Router();
const service = new SpecieServie();

specieRouter.get('/', async (req, res, next) => {

  try {

    const species = await service.find();

    res.status(201).json(species);

  } catch (error) {

    next(error);
  }
});

specieRouter.get('/:specieId',
  validatorHandler(idSpecieSchema, 'params'),
  async (req, res, next) => {

    const { specieId } = req.params;

    try {

      const specie = await service.findOne(specieId);

      res.status(201).json(specie);

    } catch (error) {

      next(error);
    }
  }
);

specieRouter.post('/',
  validatorHandler(createSpecieSchema, 'body'),
  async (req, res, next) => {

    const body = req.body;

    try {

      const specie = await service.create(body);

      res.status(201).json({ success: 'success', message: 'ESPECIE CREADA' });

    } catch (error) {

      next(error);
    }
  }
);

specieRouter.patch('/:specieId',
  validatorHandler(idSpecieSchema, 'params'),
  validatorHandler(updateSpecieSchema, 'body'),
  async (req, res, next) => {

    const { specieId } = req.params;
    const body = req.body;

    try {

      const specie = await service.update(specieId, body);

      res.json({ success: 'success', message: 'ESPECIE MODIFICADA' });

    } catch (error) {

      next(error);
    }
  }
);

specieRouter.delete('/:specieId',
  validatorHandler(idSpecieSchema, 'params'),
  async (req, res, next) => {

    const { specieId } = req.params;

    try {

      await service.delete(specieId);

      res.json({ success: 'success', message: 'ESPECIE ELIMINADA' });

    } catch (error) {

      next(error);
    }
  }
);


module.exports = specieRouter;