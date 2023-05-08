const boom = require('@hapi/boom');
const { sequelize } = require('./../libs/sequelize.js');

const model = sequelize.models.Breed;

class BreedService {

  constructor() { }

  async find() {

    const breeds = await model.findAll();

    if (Object.keys(breeds).length === 0) {

      throw boom.notFound(`BREEDS NOT FOUND.`);

    } else {

      return breeds;
    }
  }

  async findOne(breedId) {

    const breed = await model.findByPk(breedId, { include: ['breedSpecie'] });

    if (!breed) {

      throw boom.notFound('BREED NOT FOUND.');

    } else {

      return breed;
    }
  }

  async create(data) {

    const newBreed = await model.create(data);

    return newBreed;
  }

  async update(breedId, changes) {

    const breed = await this.findOne(breedId);
    const updatedBreed = await breed.update(changes);

    return updatedBreed;
  }

  async delete(breedId) {

    const breed = await this.findOne(breedId);
    await breed.destroy();

    return { breedId };
  }
};


module.exports = BreedService;