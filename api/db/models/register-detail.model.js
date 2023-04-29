const { Sequelize, Model, DataTypes } = require('sequelize');
const { PET_TABLE } = require('./pet.model.js');
const { USER_TABLE } = require('./user.model.js');

const REGISTER_DETAIL_TABLE = 'register_details';

const RegisterDetailSchema = {

  registerId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    field: 'id',
    type: DataTypes.INTEGER(10)
  },
  petId: {
    allowNull: false,
    field: 'pet_id',
    type: DataTypes.INTEGER(10),
    references: {
      model: PET_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  userId: {
    allowNull: false,
    field: 'user_id',
    type: DataTypes.INTEGER(10),
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  description: {
    allowNull: true,
    type: DataTypes.STRING(200)
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


class RegisterDetail extends Model {

  static associate(models) {
    this.belongsTo(models.Pet, { as: 'registerDetailPet', foreignKey: 'petId' });
    this.belongsTo(models.User, { as: 'registerDetailUser', foreignKey: 'userId' });
  }


  static config(sequelize) {

    return {
      sequelize,
      tableName: REGISTER_DETAIL_TABLE,
      modelName: 'RegisterDetail',
      timestamps: true,
      updatedAt: 'updated_at',
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt', 'updated_at'] }
      }
    }
  }
};


module.exports = { REGISTER_DETAIL_TABLE, RegisterDetailSchema, RegisterDetail };