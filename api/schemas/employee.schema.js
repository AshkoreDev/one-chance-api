const Joi = require('joi');

const customerId = Joi.number().integer();

const firstName = Joi.string().min(1).max(100);

const lastName = Joi.string().min(1).max(100);

const nationality = Joi.string().min(1).max(3);

const documentType = Joi.string().min(1).max(20);

const documentNumber = Joi.string().min(1).max(20);

const gender = Joi.string().min(1).max(1);

const dateOfBirth = Joi.date();

const telephone = Joi.string().min(1).max(20);

const address = Joi.string().min(1).max(100);

const active = Joi.string().min(1).max(1);


const idCustomerSchema = Joi.object({
  customerId: customerId.required()
});

const createCustomerSchema = Joi.object({
  firstName: firstName.required(),
  lastName: lastName.required(),
  nationality: nationality.required(),
  documentType: documentType.required(),
  documentNumber: documentNumber.required(),
  gender: gender.required(),
  dateOfBirth: dateOfBirth.required(),
  telephone: telephone,
  address: address
});

const updateCustomerSchema = Joi.object({
  firstName: firstName.required(),
  lastName: lastName.required(),
  nationality: nationality,
  documentType: documentType,
  documentNumber: documentNumber,
  gender: gender,
  dateOfBirth: dateOfBirth,
  telephone: telephone,
  address: address,
  active: active
});


module.exports = { idCustomerSchema, createCustomerSchema, updateCustomerSchema };