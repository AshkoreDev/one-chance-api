const { Sequelize, Model, DataTypes } = require('sequelize');

const SPECIE_TABLE = 'species';

const specieSchema = {

  specieId: {
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


class Specie extends Model {

  static associate(models) {
    this.hasMany(models.Breed, { as: 'specieBreed', foreignKey: 'specieId' });
    // this.hasMany(models.Pet, { as: 'speciePet', foreignKey: 'specieId' });
  }

  static config(sequelize) {

    return {
      sequelize,
      tableName: SPECIE_TABLE,
      modelName: 'Specie',
      timestamps: true,
      updatedAt: 'updated_at',
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt', 'updated_at'] }
      }
    }
  }
};


module.exports = { SPECIE_TABLE, specieSchema, Specie };