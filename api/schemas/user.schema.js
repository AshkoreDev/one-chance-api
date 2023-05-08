const Joi = require('joi');

const userId = Joi.number().integer();

const email = Joi.string().email().min(1).max(150);

const username = Joi.string().min(1).max(20);

const password = Joi.string().min(1).max(250);

const roleId = Joi.number().integer();

const employeeId = Joi.number().integer();

const recoveryToken = Joi.string();

const active = Joi.string().min(1).max(1);


const idUserSchema = Joi.object({
  userId: userId.required()
});

const createUserSchema = Joi.object({
  email: email.required(),
  username: username.required(),
  password: password.required(),
  roleId: roleId.required(),
  employeeId: employeeId,
  active: active
});

const updateUserSchema = Joi.object({
  email: email,
  username: username,
  password: password,
  roleId: roleId,
  employeeId: employeeId,
  recoveryToken: recoveryToken,
  active: active
});


module.exports = { idUserSchema, createUserSchema, updateUserSchema }