const Joi = require('joi');

const petId = Joi.number().integer();

const code = Joi.string().min(1).max(40);

const name = Joi.string().min(1).max(40);

const image = Joi.string().min(1).max(250);

const age = Joi.string().min(1).max(10);

const sex = Joi.string().min(1).max(1);

const specieId = Joi.number().integer();

const breedId = Joi.number().integer();

const currentHealth = Joi.string().min(1).max(250);

const currentMedicine = Joi.string().min(1).max(250);

const medicalHistory = Joi.string().min(1).max(250);

const statusId = Joi.number().integer();

const active = Joi.string().min(1).max(1);


const idPetSchema = Joi.object({
  petId: petId.required()
});

const createPetSchema = Joi.object({
  code: code.required(),
  name: name.required(),
  image: image,
  age: age.required(),
  sex: sex.required(),
  specieId: specieId.required(),
  breedId: breedId,
  currentHealth: currentHealth,
  currentMedicine: currentMedicine,
  medicalHistory: medicalHistory,
  statusId: statusId
});

const updatePetSchema = Joi.object({
  code: code,
  name: name,
  image: image,
  age: age,
  sex: sex,
  specieId: specieId,
  breedId: breedId,
  currentHealth: currentHealth,
  currentMedicine: currentMedicine,
  medicalHistory: medicalHistory,
  statusId: statusId,
  active: active
});


module.exports = { idPetSchema, createPetSchema, updatePetSchema };