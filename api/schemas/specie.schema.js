const Joi = require('joi');

const specieId = Joi.number().integer();

const title = Joi.string().min(1).max(20);

const active = Joi.string().min(1).max(1);


const idSpecieSchema = Joi.object({
  specieId: specieId.required()
});

const createSpecieSchema = Joi.object({
  title: title.required()
});

const updateSpecieSchema = Joi.object({
  title: title,
  active: active
});


module.exports = { idSpecieSchema, createSpecieSchema, updateSpecieSchema };