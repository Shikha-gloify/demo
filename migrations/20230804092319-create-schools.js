'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('library', {
      schoolId:{
          type:DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey:true,
      },
      name:{
          type:DataTypes.STRING,
          allownull:false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
  });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('schools');

  }
};
