'use strict';
const { Review } = require('../models')
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
};
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
   await Review.bulkCreate([
    {
      userId: 1,
      spotId: 1,
      review: "This was an awesome spot!",
      stars: 5,
    },
    {
      userId: 2,
      spotId: 2,
      review: "Wow so nice :)",
      stars: 5,
    },
    {
      userId: 3,
      spotId: 5,
      review: "Such a beautiful property!",
      stars: 5,
    }
   ], { validate: true})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Review';
    return queryInterface.bulkDelete(options, {}, {});
  }
};
