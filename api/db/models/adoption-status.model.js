const { Sequelize, Model, DataTypes } = require('sequelize');

const ADOPTION_STATUS_TABLE = 'adoption_status';

const AdoptionStatusSchema = {

  adoptionStatusId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    field: 'id',
    type: DataTypes.INTEGER(10)
  },
  title: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING(20)
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


class AdoptionStatus extends Model {

  static associate(models) {

  }

  static config(sequelize) {

    return {
      sequelize,
      tableName: ADOPTION_STATUS_TABLE,
      modelName: 'AdoptionStatus',
      timestamps: true,
      updatedAt: 'updated_at',
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt', 'updated_at'] }
      }
    }
  }
};


module.exports = { ADOPTION_STATUS_TABLE, AdoptionStatusSchema, AdoptionStatus };