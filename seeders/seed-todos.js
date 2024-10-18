'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ToDos', [
      {
        title: 'Write paper',
        description: 'Write a paper on the theme of cybersecurity for network security assignments',
        category: 'Education',
        userId: 1,  
        createdAt: new Date(),
        updatedAt: new Date(),
        deadline: new Date(new Date().setDate(new Date().getDate() + 3)) 
      },
      {
        title: 'The final stage for the final project task',
        description: 'Complete the coding process and enter the development stage',
        category: 'Education',
        userId: 2,  
        createdAt: new Date(),
        updatedAt: new Date(),
        deadline: new Date(new Date().setDate(new Date().getDate() + 7)) 
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ToDos', null, {});
  }
};