const boom = require('@hapi/boom');
const { sequelize } = require('./../libs/sequelize.js');

const model = sequelize.models.Pet;

class PetService {

  constructor() { }

  async find() {

    const pets = await model.findAll({ include: ['petSpecie', 'petBreed', 'petAdoptionStatus'] });

    if (Object.keys(pets).length === 0) {

      throw boom.notFound(`MASCOTAS NO ENCONTRADAS.`);

    } else {

      return pets;
    }
  }

  async findOne(petId) {

    const pet = await model.findByPk(petId, { include: ['petSpecie', 'petBreed', 'petAdoptionStatus'] });

    if (!pet) {

      throw boom.notFound('MASCOTA NO ENCONTRADA.');

    } else {

      return pet;
    }
  }

  async create(data) {

    const newPet = await model.create(data);

    return newPet;
  }

  async update(petId, changes) {

    const pet = await this.findOne(petId);
    const udpatedPet = await pet.update(changes);

    return udpatedPet;
  }

  async delete(petId) {

    const pet = await this.findOne(petId);
    await pet.destroy();

    return { petId };
  }
};


module.exports = PetService;