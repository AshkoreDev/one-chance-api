const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { sequelize } = require('./../libs/sequelize.js');

const model = sequelize.models.User;

class UserService {

  constructor() { }

  async find() {

    const users = await model.findAll({ include: ['userRole'] });

    return users;
  }

  async findOne(userId) {

    const user = await model.findByPk(userId, { include: ['userRole', 'userEmployee'] });

    if (!user) {

      throw boom.notFound('USER NOT FOUND.');

    } else {

      return user;
    }
  }

  async create(body) {

    const hash = await bcrypt.hash(body.password, 10);
    const newUser = await model.create({ ...body, password: hash });

    return newUser;
  }

  async update(userId, changes) {

    const user = await this.findOne(userId);

    const hash = await bcrypt.hash(changes.password, 10);
    const updatedUser = await user.update({ ...changes, password: hash });

    return updatedUser;
  }

  async delete(userId) {

    const user = await this.findOne(userId);
    await user.destroy();

    return { userId };
  }
};


module.exports = UserService;