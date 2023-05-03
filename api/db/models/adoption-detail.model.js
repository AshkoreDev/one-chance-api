const { Sequelize, Model, DataTypes } = require('sequelize');
const { PET_TABLE } = require('./pet.model.js');
const { USER_TABLE } = require('./user.model.js');
const { ADOPTER_TABLE } = require('./adopter.model.js');

const ADOPTION_DETAIL_TABLE = 'adoption_details';

const AdoptionDetailSchema = {

  adoptionId: {
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
  adopterId: {
    allowNull: false,
    field: 'adopter_id',
    type: DataTypes.INTEGER(10),
    references: {
      model: ADOPTER_TABLE,
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
  adoptionDate: {
    allowNull: false,
    field: 'adoption_date',
    type: DataTypes.DATEONLY
  },
  observations: {
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


class AdoptionDetail extends Model {

  static associate(models) {

    this.belongsTo(models.Pet, { as: 'adoptionDetailPet', foreignKey: 'petId' });
    this.belongsTo(models.User, { as: 'adoptionDetailUser', foreignKey: 'userId' });
    this.belongsTo(models.Adopter, { as: 'adoptionDetailAdopter', foreignKey: 'adopterId' });
  }


  static config(sequelize) {

    return {
      sequelize,
      tableName: ADOPTION_DETAIL_TABLE,
      modelName: 'AdoptionDetail',
      timestamps: true,
      updatedAt: 'updated_at',
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt', 'updated_at'] }
      }
    }
  }
};


module.exports = { ADOPTION_DETAIL_TABLE, AdoptionDetailSchema, AdoptionDetail };