const express = require('express');

const roleRouter = require('./role.router.js');
const specieRouter = require('./specie.router.js');
const breedRouter = require('./breed.router.js');
// const employeeRouter = require('./employee.router.js');
const userRouter = require('./user.router.js');
// const petRouter = require('./pet.router.js');
// const adoptionDetailRouter = require('./adoption-detail.router.js');


function routerApi(app) {

  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/roles', roleRouter);
  router.use('/species', specieRouter);
  router.use('/breeds', breedRouter);
  // router.use('/employees', employeeRouter);
  router.use('/users', userRouter);
  // router.use('/pets', petRouter);
  // router.use('/adoptions-details', adoptionDetailRouter);
};


module.exports = routerApi;