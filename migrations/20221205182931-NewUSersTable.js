'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true,
      },
      firstName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('users');
  },
};
