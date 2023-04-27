const { configOptions } = require('./../config/config.js');

const USER = encodeURIComponent(configOptions.dbUser);
const PASSWORD = encodeURIComponent(configOptions.dbPassword);
const DIALECT = configOptions.dbDialect;

const URI = `${DIALECT}://${USER}:${PASSWORD}@${configOptions.dbHost}:${configOptions.dbPort}/${configOptions.dbDatabase}`;

console.log(URI)


module.exports = {
  development: {
    url: URI,
    dialect: DIALECT,
  },
  production: {
    url: URI,
    dialect: DIALECT,
  },
  URI,
  DIALECT
};