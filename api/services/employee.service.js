const boom = require('@hapi/boom');
const { sequelize } = require('./../libs/sequelize.js');

const model = sequelize.models.Employee;

class EmployeeService {

  constructor() { }

  async find() {

    const employees = await model.findAll({ include: [{ association: 'employeeUser', include: ['userRole'] }] });

    if (Object.keys(employees).length === 0) {

      throw boom.notFound(`EMPLEADOS NO ENCONTRADOS.`);

    } else {

      return employees;
    }
  }

  async findOne(employeeId) {

    const employee = await model.findByPk(employeeId, { include: [{ association: 'employeeUser', include: ['userRole'] }] });

    if (!employee) {

      throw boom.notFound('EMPLEADO NO ENCONTRADO.');

    } else {

      return employee;
    }
  }

  async create(data) {

    const newEmployee = await model.create(data);

    return newEmployee;
  }

  async update(employeeId, changes) {

    const employee = await this.findOne(employeeId);
    const updatedEmployee = await employee.update(changes);

    return updatedEmployee;
  }

  async delete(employeeId) {

    const employee = await this.findOne(employeeId);
    await employee.destroy();

    return { employeeId };
  }
};


module.exports = EmployeeService;