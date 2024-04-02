'use strict';
const { User } = require('../models');
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   try{
   await User.bulkCreate([
    {
      email: 'demo@user.io',
      username: 'Demo-lition',
      firstName: 'John',
      lastName: 'Smith',
      hashedPassword: bcrypt.hashSync('password', 12)
    },
    {
      email: 'user1@user.io',
      username: 'FakeUser1',
      firstName: 'Sam',
      lastName: 'Less',
      hashedPassword: bcrypt.hashSync('password2', 10)
    },
    {
      email: 'user2@user.io',
      username: 'FakeUser2',
      firstName: 'Andrew',
      lastName: 'Otters',
      hashedPassword: bcrypt.hashSync('password3', 16)
    }
   ], { validate: true})
  } catch (error){
    console.error('Error occurred during password hashing:', error);
  }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
