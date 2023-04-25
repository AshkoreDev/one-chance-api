const express = require('express');
const customerRouter = require('./species.router.js');
const customerRouter = require('./breeds.router.js');
const customerRouter = require('./employees.router.js');
const customerRouter = require('./users.router.js');
const customerRouter = require('./pets.router.js');
const customerRouter = require('./adoptions-details.router.js');


function routerApi(app) {

  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/species', customerRouter);
  router.use('/breeds', customerRouter);
  router.use('/employees', customerRouter);
  router.use('/users', categoryRouter);
  router.use('/pets', productRouter);
  router.use('/adoptions-details', authRouter);
};


module.exports = routerApi;