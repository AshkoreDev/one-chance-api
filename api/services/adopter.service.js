const boom = require('@hapi/boom');
const { sequelize } = require('./../libs/sequelize.js');

const model = sequelize.models.Adopter;

class AdopterService {

  constructor() { }

  async find() {

    const adopters = await model.findAll();

    if (Object.keys(adopters).length === 0) {

      throw boom.notFound(`ADOPTANTES NO ENCONTRADOS.`);

    } else {
      
      return adopters;
    }
  }

  async findOne(adopterId) {

    const adopter = await model.findByPk(adopterId);

    if (!adopter) {

      throw boom.notFound('ADOPTANTE NO ENCONTRADO');

    } else {

      return adopter;
    }
  }

  async create(data) {

    const newAdopter = await model.create(data);

    return newAdopter;
  }

  async update(adopterId, changes) {

    const adopter = await this.findOne(adopterId);
    const updatedAdopter = await adopter.update(changes);

    return updatedAdopter;
  }

  async delete(adopterId) {

    const adopter = await this.findOne(adopterId);
    await adopter.destroy();

    return { adopterId };
  }
};


module.exports = AdopterService;