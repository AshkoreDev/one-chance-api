const boom = require('@hapi/boom');
const { sequelize } = require('./../libs/sequelize.js');

const model = sequelize.models.AdoptionDetail;

class AdoptionDetailService {

  constructor() { }

  async find() {

    const adoptions = await model.findAll();

    if (Object.keys(adoptions).length === 0) {

      throw boom.notFound(`DETALLES DE ADOPCIÓN NO ENCONTRADOS.`);

    } else {

      return adoptions;
    }
  }

  async findOne(adoptionId) {

    const adoption = await model.findByPk(adoptionId);

    if (!adoption) {

      throw boom.notFound('DETALLE DE ADOPCIÓN NO ENCONTRADO.');

    } else {

      return adoption;
    }
  }

  async create(data) {

    const newAdoption = await model.create(data);

    return newAdoption;
  }

  async update(adoptionId, changes) {

    const adoption = await this.findOne(adoptionId);
    const updatedAdoption = await adoption.update(changes);

    return updatedAdoption;
  }

  async delete(adoptionId) {

    const adoption = await this.findOne(adoptionId);
    await adoption.destroy();

    return { adoptionId };
  }
};


module.exports = AdoptionDetailService;