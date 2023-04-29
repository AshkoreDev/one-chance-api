const { Sequelize, Model, DataTypes } = require('sequelize');
const { SPECIE_TABLE } = require('./specie.model.js');
const { BREED_TABLE } = require('./breed.model.js');
const { ADOPTION_STATUS_TABLE } = require('./adoption-status.model.js');

const PET_TABLE = 'pets';

const PetSchema = {

  petId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    field: 'id',
    type: DataTypes.INTEGER(10)
  },
  code: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING(40)
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING(40)
  },
  image: {
    allowNull: true, //must be false
    defaultValue: './../../assets/petImageDefault.png',
    type: DataTypes.STRING(250)
  },
  age: {
    allowNull: false,
    type: DataTypes.STRING(10)
  },
  sex: {
    allowNull: false,
    type: DataTypes.ENUM('F', 'M')
  },
  specieId: {
    allowNull: false,
    field: 'specie_id',
    type: DataTypes.INTEGER(10),
    references: {
      model: SPECIE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  breedId: {
    allowNull: true,
    field: 'breed_id',
    type: DataTypes.INTEGER(10),
    references: {
      model: BREED_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  currentHealth: {
    allowNull: true,
    field: 'current_health',
    type: DataTypes.STRING(250)
  },
  currentMedicine: {
    allowNull: true,
    field: 'current_medicine',
    type: DataTypes.STRING(250)
  },
  medicalHistory: {
    allowNull: true,
    field: 'medical_history',
    type: DataTypes.STRING(250)
  },
  adoptionStatusId: {
    allowNull: false,
    field: 'adoption_status_id',
    defaultValue: 2,
    type: DataTypes.INTEGER(10),
    references: {
      model: ADOPTION_STATUS_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  active: {
    allowNull: false,
    defaultValue: 'A',
    type: DataTypes.ENUM('A', 'I')
  },
  createdAt: {
    allowNull: false,
    field: 'created_at',
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  updatedAt: {
    allowNull: false,
    field: 'updated_at',
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }
};


class Pet extends Model {

  static associate(models) {
    this.belongsTo(models.Specie, { as: 'petSpecie', foreignKey: 'specieId' });
    this.belongsTo(models.Breed, { as: 'petBreed', foreignKey: 'breedId' });
    this.belongsTo(models.AdoptionStatus, { as: 'petAdoptionStatus', foreignKey: 'adoptionStatusId' });
    this.hasOne(models.RegisterDetail, { as: 'petRegisterDetail', foreignKey: 'petId' });
  }

  static config(sequelize) {

    return {
      sequelize,
      tableName: PET_TABLE,
      modelName: 'Pet',
      timestamps: true,
      updatedAt: 'updated_at',
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt', 'updated_at'] }
      }
    }
  }
};


module.exports = { PET_TABLE, PetSchema, Pet };