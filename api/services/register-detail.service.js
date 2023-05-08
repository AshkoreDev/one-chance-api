const boom = require('@hapi/boom');
const { sequelize } = require('./../libs/sequelize.js');

const model = sequelize.models.RegisterDetail;

class RegisterDetailService {

  constructor() { }

  async find() {

    const registers = await model.findAll();

    if (Object.keys(registers).length === 0) {

      throw boom.notFound(`DETALLES DE REGISTRO NO ENCONTRADOS.`);

    } else {

      return registers;
    }
  }

  async findOne(registerId) {

    const register = await model.findByPk(registerId, {
      include: [
        { association: 'registerDetailPet', include: ['petSpecie', 'petBreed', 'petAdoptionStatus'] },
        { association: 'registerDetailUser', include: ['userRole'] }
      ]
    });

    if (!register) {

      throw boom.notFound('DETALLE DE REGISTRO NO ENCONTRADO.');

    } else {

      return register;
    }
  }

  async create(data) {

    const newRegister = await model.create(data);

    return newRegister;
  }

  async update(registerId, changes) {

    const register = await this.findOne(registerId);
    const updatedRegister = await register.update(changes);

    return updatedRegister;
  }

  async delete(registerId) {

    const register = await this.findOne(registerId);
    await register.destroy();

    return { registerId };
  }
};


module.exports = RegisterDetailService;