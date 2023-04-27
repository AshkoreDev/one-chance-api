require('dotenv').config();

const configOptions = {

  port: process.env.PORT,
  dbDialect: process.env.DB_DIALECT,
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbDatabase: process.env.DB_DATABASE,
  dbPort: process.env.DB_PORT,
  env: process.env.NODE_ENV,
};


module.exports = { configOptions };