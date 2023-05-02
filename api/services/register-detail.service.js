const boom = require('@hapi/boom');
const { sequelize } = require('./../libs/sequelize.js');

const model = sequelize.models.RegisterDetail;

class RegisterDetailService {

  constructor() { }

  async find() {

    const registers = await model.findAll();

    return registers;
  }

  async findOne(registerDetailId) {

    const register = await model.findByPk(registerDetailId, {
      include: [
        { association: 'registerDetailPet', include: ['petSpecie', 'petBreed', 'petAdoptionStatus'] },
        { association: 'registerDetailUser', include: ['userRole'] }
      ]
    });

    if (!register) {

      throw boom.notFound('REGISTER DETAIL NOT FOUND.');

    } else {

      return register;
    }
  }

  async create(data) {

    const newRegister = await model.create(data);

    return newRegister;
  }

  async update(registerDetailId, changes) {

    const register = await this.findOne(registerDetailId);
    const updatedRegister = await register.update(changes);

    return updatedRegister;
  }

  async delete(registerDetailId) {

    const register = await this.findOne(registerDetailId);
    await register.destroy();

    return { registerDetailId };
  }
};


module.exports = RegisterDetailService;