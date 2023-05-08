const Joi = require('joi');

const registerId = Joi.number().integer();

const petId = Joi.number().integer();

const userId = Joi.number().integer();

const rescueDate = Joi.date();

const observations = Joi.string().min(1).max(200);


const idRegisterDetailSchema = Joi.object({
  registerId: registerId.required()
});

const createRegisterDetailSchema = Joi.object({
  petId: petId.required(),
  userId: userId.required(),
  rescueDate: rescueDate.required(),
  observations: observations
});

const updateRegisterDetailSchema = Joi.object({
  petId: petId,
  userId: userId,
  rescueDate: rescueDate,
  observations: observations
});


module.exports = { idRegisterDetailSchema, createRegisterDetailSchema, updateRegisterDetailSchema };