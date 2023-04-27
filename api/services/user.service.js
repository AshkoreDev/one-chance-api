const boom = require('@hapi/boom');
const { sequelize } = require('./../libs/sequelize.js');

const model = sequelize.models.User;

class UserService {

  constructor() { }

  async find() {

    const users = await model.findAll({ include: ['userRole'] });

    return users;
  }

  async findOne(userId) {

    const user = await model.findByPk(userId, { include: ['userRole'] });

    if (!user) {

      throw boom.notFound('USER NOT FOUND.');

    } else {

      return user;
    }
  }

  async create(data) {

    const newUser = await model.create(data);

    return newUser;
  }

  async update(userId, changes) {

    const user = await this.findOne(userId);
    const updatedUser = await user.update(changes);

    return updatedUser;
  }

  async delete(userId) {

    const user = await this.findOne(userId);
    await user.destroy();

    return { userId };
  }
};


module.exports = UserService;