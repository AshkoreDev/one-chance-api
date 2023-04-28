'use strict';

const { ROLE_TABLE } = require('../models/role.model.js');
const { roleData } = require('./../data/role.data.js');
const { ADOPTION_STATUS_TABLE } = require('../models/adoption-status.model.js');
const { adoptionStatusData } = require('./../data/adoption-status.data.js');
const { SPECIE_TABLE } = require('../models/specie.model.js');
const { specieData } = require('./../data/specie.data.js');
const { BREED_TABLE } = require('../models/breed.model.js');
const { breedData } = require('./../data/breed.data.js');


module.exports = {

  async up(queryInterface) {

    await queryInterface.bulkInsert(ROLE_TABLE, roleData);
    await queryInterface.bulkInsert(ADOPTION_STATUS_TABLE, adoptionStatusData);
    await queryInterface.bulkInsert(SPECIE_TABLE, specieData);
    await queryInterface.bulkInsert(BREED_TABLE, breedData);
  },

  async down(queryInterface) { }
};