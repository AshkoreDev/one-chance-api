const { Sequelize } = require('sequelize');
const { URI, DIALECT } = require('./../db/config.js');
const setupModels = require('./../db/models/index.js');

console.log(URI)
const sequelize = new Sequelize(URI, {
  dialect: DIALECT,
  // logging: true
  logging: console.log
});

// sequelize.query(`CREATE DATABASE IF NOT EXISTS \`${configOptions.dbDatabase}\`;`);

setupModels(sequelize);
// sequelize.sync();


module.exports = { sequelize };