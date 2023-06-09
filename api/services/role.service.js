const boom = require('@hapi/boom');
const { sequelize } = require('./../libs/sequelize.js');

const model = sequelize.models.Role;

class RoleService {

  constructor() { }

  async find() {

    const roles = await model.findAll();

    if (Object.keys(roles).length === 0) {

      throw boom.notFound(`ROLES NO ENCONTRADOS.`);

    } else {

      return roles;
    }
  }

  async findOne(roleId) {

    const role = await model.findByPk(roleId);

    if (!role) {

      throw boom.notFound('ROL NO ENCONTRADO.');

    } else {

      return role;
    }
  }

  async create(data) {

    const newRole = await model.create(data);

    return newRole;
  }

  async update(roleId, changes) {

    const role = await this.findOne(roleId);
    const updatedRole = await role.update(changes);

    return updatedRole;
  }

  async delete(roleId) {

    const role = await this.findOne(roleId);
    await role.destroy();

    return { roleId };
  }
};


module.exports = RoleService;