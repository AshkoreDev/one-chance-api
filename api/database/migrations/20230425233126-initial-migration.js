'use strict';

const { RoleSchema, ROLE_TABLE } = require('./../models/role.model.js');
const { EmployeeSchema, EMPLOYEE_TABLE } = require('./../models/employee.model.js');
const { UserSchema, USER_TABLE } = require('./../models/user.model.js');

module.exports = {
  
  up: async (queryInterface) => {
    
    await queryInterface.createTable(ROLE_TABLE, RoleSchema);
    await queryInterface.createTable(EMPLOYEE_TABLE, EmployeeSchema);
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  down: async (queryInterface) => {
    
    await queryInterface.dropTable(ROLE_TABLE);
    await queryInterface.dropTable(EMPLOYEE_TABLE); 
    await queryInterface.dropTable(USER_TABLE);
  }
};