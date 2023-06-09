'use strict';

const { RoleSchema, ROLE_TABLE } = require('./../models/role.model.js');
const { AdoptionStatusSchema, ADOPTION_STATUS_TABLE } = require('./../models/adoption-status.model.js');
const { specieSchema, SPECIE_TABLE } = require('./../models/specie.model.js');
const { breedSchema, BREED_TABLE } = require('./../models/breed.model.js');
const { EmployeeSchema, EMPLOYEE_TABLE } = require('./../models/employee.model.js');
const { UserSchema, USER_TABLE } = require('./../models/user.model.js');
const { PetSchema, PET_TABLE } = require('./../models/pet.model.js');
const { AdopterSchema, ADOPTER_TABLE } = require('./../models/adopter.model.js');
const { RegisterDetailSchema, REGISTER_DETAIL_TABLE } = require('./../models/register-detail.model.js');
const { AdoptionDetailSchema, ADOPTION_DETAIL_TABLE } = require('./../models/adoption-detail.model.js');



module.exports = {

  up: async (queryInterface) => {

    await queryInterface.createTable(ROLE_TABLE, RoleSchema);
    await queryInterface.createTable(ADOPTION_STATUS_TABLE, AdoptionStatusSchema);
    await queryInterface.createTable(SPECIE_TABLE, specieSchema);
    await queryInterface.createTable(BREED_TABLE, breedSchema);
    await queryInterface.createTable(EMPLOYEE_TABLE, EmployeeSchema);
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(PET_TABLE, PetSchema);
    await queryInterface.createTable(ADOPTER_TABLE, AdopterSchema);
    await queryInterface.createTable(REGISTER_DETAIL_TABLE, RegisterDetailSchema);
    await queryInterface.createTable(ADOPTION_DETAIL_TABLE, AdoptionDetailSchema);
  },

  down: async (queryInterface) => {

    await queryInterface.dropTable(ROLE_TABLE);
    await queryInterface.dropTable(ADOPTION_STATUS_TABLE);
    await queryInterface.dropTable(SPECIE_TABLE);
    await queryInterface.dropTable(BREED_TABLE);
    await queryInterface.dropTable(EMPLOYEE_TABLE);
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(PET_TABLE);
    await queryInterface.dropTable(ADOPTER_TABLE);
    await queryInterface.dropTable(REGISTER_DETAIL_TABLE);
    await queryInterface.dropTable(ADOPTION_DETAIL_TABLE);
  }
};