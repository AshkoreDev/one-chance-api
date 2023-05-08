const Joi = require('joi');

const adoptionStatusId = Joi.number().integer();

const title = Joi.string().min(1).max(20);

const active = Joi.string().min(1).max(1);


const idAdoptionStatusSchema = Joi.object({
  adoptionStatusId: adoptionStatusId.required()
});

const createAdoptionStatusSchema = Joi.object({
  title: title.required(),
  active: active
});

const updateAdoptionStatusSchema = Joi.object({
  title: title,
  active: active
});


module.exports = { idAdoptionStatusSchema, createAdoptionStatusSchema, updateAdoptionStatusSchema };