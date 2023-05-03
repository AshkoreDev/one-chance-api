const express = require('express');
const AdopterService = require('./../services/adopter.service.js');
const validatorHandler = require('./../middlewares/validator.handler.js');
const { idAdopterSchema, createAdopterSchema, updateAdopterSchema } = require('./../schemas/adopter.schema.js');


const adopterRouter = express.Router();
const service = new AdopterService();

adopterRouter.get('/', async (req, res, next) => {

  try {

    const adopters = await service.find();

    res.status(201).json(adopters);

  } catch (error) {

    next(error);
  }
});

adopterRouter.get('/:adopterId',
  validatorHandler(idAdopterSchema, 'params'),
  async (req, res, next) => {

    const { adopterId } = req.params;

    try {

      const adopter = await service.findOne(adopterId);

      res.status(201).json(adopter);

    } catch (error) {

      next(error);
    }
  }
);

adopterRouter.post('/',
  validatorHandler(createAdopterSchema, 'body'),
  async (req, res, next) => {

    const body = req.body;

    try {

      const adopter = await service.create(body);

      res.status(201).json({ message: 'ADOPTER CREATED', data: adopter });

    } catch (error) {

      next(error);
    }
  }
);

adopterRouter.patch('/:adopterId',
  validatorHandler(idAdopterSchema, 'params'),
  validatorHandler(updateAdopterSchema, 'body'),
  async (req, res, next) => {

    const { adopterId } = req.params;
    const body = req.body;

    try {

      const adopter = await service.update(adopterId, body);

      res.json({ message: 'ADOPTER UPDATED', data: adopter });

    } catch (error) {

      next(error);
    }
  }
);

adopterRouter.delete('/:adopterId',
  validatorHandler(idAdopterSchema, 'params'),
  async (req, res, next) => {

    const { adopterId } = req.params;

    try {

      await service.delete(adopterId);

      res.json({ message: 'ADOPTER DELETED', adopterId });

    } catch (error) {

      next(error);
    }
  }
);


module.exports = adopterRouter;