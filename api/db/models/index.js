const { Role, RoleSchema } = require('./role.model.js');
const { AdoptionStatus, AdoptionStatusSchema } = require('./adoption-status.model.js');
const { Specie, specieSchema } = require('./specie.model.js');
const { Breed, breedSchema } = require('./breed.model.js');
const { Employee, EmployeeSchema } = require('./employee.model.js');
const { User, UserSchema } = require('./user.model.js');
const { Pet, PetSchema } = require('./pet.model.js');
const { Adopter, AdopterSchema } = require('./adopter.model.js');
const { RegisterDetail, RegisterDetailSchema } = require('./register-detail.model.js');
const { AdoptionDetail, AdoptionDetailSchema } = require('./adoption-detail.model.js');


function setupModels(sequelize) {
  Role.init(RoleSchema, Role.config(sequelize));
  AdoptionStatus.init(AdoptionStatusSchema, AdoptionStatus.config(sequelize));
  Specie.init(specieSchema, Specie.config(sequelize));
  Breed.init(breedSchema, Breed.config(sequelize));
  Employee.init(EmployeeSchema, Employee.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
  Pet.init(PetSchema, Pet.config(sequelize));
  Adopter.init(AdopterSchema, Adopter.config(sequelize));
  RegisterDetail.init(RegisterDetailSchema, RegisterDetail.config(sequelize));
  AdoptionDetail.init(AdoptionDetailSchema, AdoptionDetail.config(sequelize));


  Role.associate(sequelize.models);
  AdoptionStatus.associate(sequelize.models);
  Specie.associate(sequelize.models);
  Breed.associate(sequelize.models);
  Employee.associate(sequelize.models);
  User.associate(sequelize.models);
  Pet.associate(sequelize.models);
  Adopter.associate(sequelize.models);
  RegisterDetail.associate(sequelize.models);
  AdoptionDetail.associate(sequelize.models);
}

module.exports = setupModels;
