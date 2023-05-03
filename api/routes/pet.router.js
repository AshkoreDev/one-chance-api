const express = require('express');
const PetService = require('./../services/pet.service.js');
const validatorHandler = require('./../middlewares/validator.handler.js');
const { idPetSchema, createPetSchema, updatePetSchema } = require('./../schemas/pet.schema.js');


const petRouter = express.Router();
const service = new PetService();

petRouter.get('/', async (req, res, next) => {

  try {

    const pets = await service.find();

    res.status(201).json(pets);

  } catch (error) {

    next(error);
  }
});

petRouter.get('/:petId',
  validatorHandler(idPetSchema, 'params'),
  async (req, res, next) => {

    const { petId } = req.params;

    try {

      const pet = await service.findOne(petId);

      res.status(201).json(pet);

    } catch (error) {

      next(error);
    }
  }
);

petRouter.post('/',
  validatorHandler(createPetSchema, 'body'),
  async (req, res, next) => {

    const body = req.body;

    try {

      const pet = await service.create(body);

      res.status(201).json({ message: 'PET CREATED', data: pet });

    } catch (error) {

      next(error);
    }
  }
);

petRouter.patch('/:petId',
  validatorHandler(idPetSchema, 'params'),
  validatorHandler(updatePetSchema, 'body'),
  async (req, res, next) => {

    const { petId } = req.params;
    const body = req.body;

    try {

      const pet = await service.update(petId, body);

      res.json({ message: 'PET UPDATED', data: pet });

    } catch (error) {

      next(error);
    }
  }
);

petRouter.delete('/:petId',
  validatorHandler(idPetSchema, 'params'),
  async (req, res, next) => {

    const { petId } = req.params;

    try {

      await service.delete(petId);

      res.json({ message: 'PET DELETED', petId });

    } catch (error) {

      next(error);
    }
  }
);


module.exports = petRouter;