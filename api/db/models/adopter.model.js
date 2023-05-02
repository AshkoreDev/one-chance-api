const { Sequelize, Model, DataTypes } = require('sequelize');

const ADOPTER_TABLE = 'adopters';

const AdopterSchema = {

  adopterId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    field: 'id',
    type: DataTypes.INTEGER(10)
  },
  firstName: {
    allowNull: false,
    field: 'first_name',
    type: DataTypes.STRING(100)
  },
  lastName: {
    allowNull: false,
    field: 'last_name',
    type: DataTypes.STRING(100)
  },
  image: {
    allowNull: true, //must be false
    defaultValue: './../../assets/employeeImageDefault.png',
    type: DataTypes.STRING(250)
  },
  nationality: {
    allowNull: false,
    type: DataTypes.STRING(3)
  },
  documentType: {
    allowNull: false,
    field: 'document_type',
    defaultValue: 'D',
    type: DataTypes.ENUM('D', 'P')
  },
  documentNumber: {
    allowNull: false,
    field: 'document_number',
    type: DataTypes.STRING(20)
  },
  gender: {
    allowNull: false,
    type: DataTypes.ENUM('F', 'M', 'O')
  },
  dateOfBirth: {
    allowNull: false,
    field: 'date_of_birth',
    type: DataTypes.DATEONLY
  },
  telephone: {
    allowNull: false,
    type: DataTypes.STRING(20)
  },
  address: {
    allowNull: false,
    type: DataTypes.STRING(100)
  },
  status: {
    allowNull: false,
    type: DataTypes.ENUM('A', 'R', 'O')
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


class Adopter extends Model {

  static associate(models) {
    // this.hasOne(models.User, { as: 'employeeUser', foreignKey: 'userId' });
  }

  static config(sequelize) {

    return {
      sequelize,
      tableName: ADOPTER_TABLE,
      modelName: 'Adopter',
      timestamps: true,
      updatedAt: 'updated_at',
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt', 'updated_at'] }
      }
    }
  }
};


module.exports = { ADOPTER_TABLE, AdopterSchema, Adopter };