const express = require('express');

const customerRouter = require('./specie.router.js');
const customerRouter = require('./breed.router.js');
const customerRouter = require('./employee.router.js');
const userRouter = require('./user.router.js');
const customerRouter = require('./pet.router.js');
const customerRouter = require('./adoption-detail.router.js');


function routerApi(app) {

  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/species', customerRouter);
  router.use('/breeds', customerRouter);
  router.use('/employees', customerRouter);
  router.use('/users', userRouter);
  router.use('/pets', productRouter);
  router.use('/adoptions-details', authRouter);
};


module.exports = routerApi;