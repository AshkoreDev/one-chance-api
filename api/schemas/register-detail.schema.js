const Joi = require('joi');

const registerDetailId = Joi.number().integer();

const petId = Joi.number().integer();

const userId = Joi.number().integer();

const rescueDate = Joi.date();

const description = Joi.string().min(1).max(200);


const idRegisterDetailSchema = Joi.object({
  registerDetailId: registerDetailId.required()
});

const createRegisterDetailSchema = Joi.object({
  petId: petId.required(),
  userId: userId.required(),
  rescueDate: rescueDate.required(),
  description: description
});

const updateRegisterDetailSchema = Joi.object({
  petId: petId,
  userId: userId,
  rescueDate: rescueDate,
  description: description
});


module.exports = { idRegisterDetailSchema, createRegisterDetailSchema, updateRegisterDetailSchema };