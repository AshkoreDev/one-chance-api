const boom = require('@hapi/boom');
const { sequelize } = require('./../libs/sequelize.js');

const model = sequelize.models.AdoptionStatus;

class AdoptionStatusService {

  constructor() { }

  async find() {

    const status = await model.findAll();

    if (Object.keys(status).length === 0) {

      throw boom.notFound(`ADOPTIONS STATUS NOT FOUND.`);

    } else {

      return status;
    }
  }

  async findOne(adoptionStatusId) {

    const status = await model.findByPk(adoptionStatusId);

    if (!status) {

      throw boom.notFound('ADOPTION STATUS NOT FOUND.');

    } else {

      return status;
    }
  }

  async create(data) {

    const newStatus = await model.create(data);

    return newStatus;
  }

  async update(adoptionStatusId, changes) {

    const status = await this.findOne(adoptionStatusId);
    const updatedStatus = await status.update(changes);

    return updatedStatus;
  }

  async delete(adoptionStatusId) {

    const status = await this.findOne(adoptionStatusId);
    await status.destroy();

    return { adoptionStatusId };
  }
};


module.exports = AdoptionStatusService;