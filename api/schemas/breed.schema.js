const Joi = require('joi');

const breedId = Joi.number().integer();

const title = Joi.string().min(1).max(20);

const specieId = Joi.number().integer();

const active = Joi.string().min(1).max(1);


const idBreedSchema = Joi.object({
  breedId: breedId.required()
});

const createBreedSchema = Joi.object({
  title: title.required(),
  specieId: specieId.required(),
  active: active
});

const updateBreedSchema = Joi.object({
  title: title,
  specieId: specieId,
  active: active
});


module.exports = { idBreedSchema, createBreedSchema, updateBreedSchema };