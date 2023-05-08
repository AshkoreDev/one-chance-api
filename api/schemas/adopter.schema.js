const Joi = require('joi');

const adopterId = Joi.number().integer();

const firstName = Joi.string().min(1).max(100);

const lastName = Joi.string().min(1).max(100);

const image = Joi.string().min(1).max(250);

const nationality = Joi.string().min(1).max(3);

const documentType = Joi.string().min(1).max(1);

const documentNumber = Joi.string().min(1).max(20);

const gender = Joi.string().min(1).max(1);

const dateOfBirth = Joi.date();

const telephone = Joi.string().min(1).max(20);

const address = Joi.string().min(1).max(150);

const status = Joi.string().min(1).max(1);

const active = Joi.string().min(1).max(1);


const idAdopterSchema = Joi.object({
  adopterId: adopterId.required()
});

const createAdopterSchema = Joi.object({
  firstName: firstName.required(),
  lastName: lastName.required(),
  image: image,
  nationality: nationality.required(),
  documentType: documentType.required(),
  documentNumber: documentNumber.required(),
  gender: gender.required(),
  dateOfBirth: dateOfBirth.required(),
  telephone: telephone.required(),
  address: address.required(),
  status: status.required(),
  active: active
});

const updateAdopterSchema = Joi.object({
  firstName: firstName,
  lastName: lastName,
  nationality: nationality,
  documentType: documentType,
  documentNumber: documentNumber,
  gender: gender,
  dateOfBirth: dateOfBirth,
  telephone: telephone,
  address: address,
  status: status,
  active: active
});


module.exports = { idAdopterSchema, createAdopterSchema, updateAdopterSchema };