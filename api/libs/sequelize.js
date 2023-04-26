const { Sequelize } = require('sequelize');
const { URI } = require('./../database/config.js');
const setupModels  = require('./../database/models/index.js');


const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  // logging: true
  logging: console.log
});

// sequelize.query(`CREATE DATABASE IF NOT EXISTS \`${configOptions.dbDatabase}\`;`);

setupModels(sequelize);
// sequelize.sync();


module.exports = { sequelize };