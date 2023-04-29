const Joi = require('joi');

const registerId = Joi.number().integer();

const petId = Joi.number().integer();

const userId = Joi.number().integer();

const description = Joi.string().min(1).max(200);


const idRoleSchema = Joi.object({
  registerId: registerId.required()
});

const createRoleSchema = Joi.object({
  petId: petId.required(),
  userId: userId.required(),
  description: description
});

const updateRoleSchema = Joi.object({
  petId: petId,
  userId: userId,
  description: description
});


module.exports = { idRoleSchema, createRoleSchema, updateRoleSchema };