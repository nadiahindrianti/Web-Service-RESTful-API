'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'User 1',
        email: 'user1@gmail.com',
        password: 'hashedpassword1',  
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'User 2',
        email: 'user2@gmail.com',
        password: 'hashedpassword2',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};