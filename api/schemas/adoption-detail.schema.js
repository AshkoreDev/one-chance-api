const Joi = require('joi');

const adoptionId = Joi.number().integer();

const petId = Joi.number().integer();

const adopterId = Joi.number().integer();

const userId = Joi.number().integer();

const adoptionDate = Joi.date();

const observations = Joi.string().min(1).max(200);


const idRegisterDetailSchema = Joi.object({
  adoptionId: adoptionId.required()
});

const createRegisterDetailSchema = Joi.object({
  petId: petId.required(),
  adopterId: adopterId.required(),
  userId: userId.required(),
  adoptionDate: adoptionDate.required(),
  observations: observations
});

const updateRegisterDetailSchema = Joi.object({
  petId: petId,
  adopterId: adopterId,
  userId: userId,
  adoptionDate: adoptionDate,
  observations: observations
});


module.exports = { idRegisterDetailSchema, createRegisterDetailSchema, updateRegisterDetailSchema };