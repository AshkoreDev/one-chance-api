const { Sequelize, Model, DataTypes } = require('sequelize');
const { SPECIE_TABLE } = require('./specie.model.js');

const BREED_TABLE = 'breeds';

const breedSchema = {

  breedId: {
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


class Breed extends Model {

  static associate(models) {
    this.belongsTo(models.Specie, { as: 'breedSpecie', foreignKey: 'specieId' });
  }

  static config(sequelize) {

    return {
      sequelize,
      tableName: BREED_TABLE,
      modelName: 'Breed',
      timestamps: true,
      updatedAt: 'updated_at',
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt', 'updated_at'] }
      }
    }
  }
};


module.exports = { BREED_TABLE, breedSchema, Breed };