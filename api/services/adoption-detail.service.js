const boom = require('@hapi/boom');
const { sequelize } = require('./../libs/sequelize.js');

const model = sequelize.models.AdoptionDetail;

class AdoptionDetailService {

  constructor() { }

  async find() {

    const adoptions = await model.findAll();

    return adoptions;
  }

  async findOne(adoptionDetailId) {

    const adoption = await model.findByPk(adoptionDetailId);

    if (!adoption) {

      throw boom.notFound('ADOPTION DETAIL NOT FOUND.');

    } else {

      return adoption;
    }
  }

  async create(data) {

    const newAdoption = await model.create(data);

    return newAdoption;
  }

  async update(adoptionDetailId, changes) {

    const adoption = await this.findOne(adoptionDetailId);
    const updatedAdoption = await adoption.update(changes);

    return updatedAdoption;
  }

  async delete(adoptionDetailId) {

    const adoption = await this.findOne(adoptionDetailId);
    await adoption.destroy();

    return { adoptionDetailId };
  }
};


module.exports = AdoptionDetailService;