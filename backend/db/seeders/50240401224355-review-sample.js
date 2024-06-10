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
      review: "This spot was perfect for my needs. Great location and amenities!",
      stars: 4
    },
    {
      userId: 7,
      spotId: 3,
      review: "Great spot with fantastic amenities! Highly recommend.",
      stars: 5
    },
    {
      userId: 8,
      spotId: 3,
      review: "Decent spot, but could use some improvements in cleanliness.",
      stars: 3
    },
    {
      userId: 9,
      spotId: 3,
      review: "Unfortunately, this spot was not well-maintained. Disappointing experience.",
      stars: 4
    },
    {
      userId: 10,
      spotId: 4,
      review: "This spot was exactly what I needed. Clean and cozy!",
      stars: 4
    },
    


   ], { validate: true})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Reviews';
    return queryInterface.bulkDelete(options, {}, {});
  }
};
