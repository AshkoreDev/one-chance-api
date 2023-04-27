const boom = require('@hapi/boom');
const { sequelize } = require('./../libs/sequelize.js');

const model = sequelize.models.Specie;

class SpecieService {

  constructor() { }

  async find() {

    const species = await model.findAll();

    return species;
  }

  async findOne(specieId) {

    const specie = await model.findByPk(specieId);

    if (!specie) {

      throw boom.notFound('SPECIE NOT FOUND.');

    } else {

      return specie;
    }
  }

  async create(data) {

    const newSpecie = await model.create(data);

    return newSpecie;
  }

  async update(specieId, changes) {

    const specie = await this.findOne(specieId);
    const updatedSpecie = await specie.update(changes);

    return updatedSpecie;
  }

  async delete(specieId) {

    const specie = await this.findOne(specieId);
    await specie.destroy();

    return { specieId };
  }
};


module.exports = SpecieService;