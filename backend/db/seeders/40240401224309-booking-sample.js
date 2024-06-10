'use strict';
const { Booking } = require('../models');

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
    await Booking.bulkCreate([
      {
        spotId: 1,
        userId: 1,
        startDate: "2023-06-10",
        endDate: "2023-06-11"
      },
      {
        spotId: 1,
        userId: 2,
        startDate: "2023-06-12",
        endDate: "2023-06-13"
      },
      {
        spotId: 1,
        userId: 3,
        startDate: "2023-06-14",
        endDate: "2023-06-15"
      },
      {
        spotId: 2,
        userId: 4,
        startDate: "2023-06-11",
        endDate: "2023-06-12"
      },
      {
        spotId: 2,
        userId: 5,
        startDate: "2023-06-13",
        endDate: "2023-06-14"
      },
      {
        spotId: 2,
        userId: 6,
        startDate: "2023-06-15",
        endDate: "2023-06-16"
      },
      {
        spotId: 1,
        userId: 1,
        startDate: "2023-06-10",
        endDate: "2023-06-11"
      },
      {
        spotId: 1,
        userId: 2,
        startDate: "2023-06-12",
        endDate: "2023-06-13"
      },
      {
        spotId: 1,
        userId: 3,
        startDate: "2023-06-14",
        endDate: "2023-06-15"
      },
      {
        spotId: 2,
        userId: 4,
        startDate: "2023-06-11",
        endDate: "2023-06-12"
      },
      {
        spotId: 2,
        userId: 5,
        startDate: "2023-06-13",
        endDate: "2023-06-14"
      },
      {
        spotId: 2,
        userId: 6,
        startDate: "2023-06-15",
        endDate: "2023-06-16"
      },
      {
        spotId: 3,
        userId: 7,
        startDate: "2023-06-12",
        endDate: "2023-06-13"
      },
      {
        spotId: 3,
        userId: 8,
        startDate: "2023-06-14",
        endDate: "2023-06-15"
      },
      {
        spotId: 3,
        userId: 9,
        startDate: "2023-06-16",
        endDate: "2023-06-17"
      },
      {
        spotId: 4,
        userId: 10,
        startDate: "2023-06-13",
        endDate: "2023-06-14"
      },
      {
        spotId: 4,
        userId: 11,
        startDate: "2023-06-15",
        endDate: "2023-06-16"
      },
      {
        spotId: 4,
        userId: 12,
        startDate: "2023-06-17",
        endDate: "2023-06-18"
      },
      {
        spotId: 5,
        userId: 13,
        startDate: "2023-06-14",
        endDate: "2023-06-15"
      },
      {
        spotId: 5,
        userId: 14,
        startDate: "2023-06-16",
        endDate: "2023-06-17"
      },
      {
        spotId: 5,
        userId: 15,
        startDate: "2023-06-18",
        endDate: "2023-06-19"
      },
      {
        spotId: 6,
        userId: 16,
        startDate: "2023-06-15",
        endDate: "2023-06-16"
      },
      {
        spotId: 6,
        userId: 17,
        startDate: "2023-06-17",
        endDate: "2023-06-18"
      },
      {
        spotId: 6,
        userId: 18,
        startDate: "2023-06-19",
        endDate: "2023-06-20"
      },
      {
        spotId: 7,
        userId: 19,
        startDate: "2023-06-16",
        endDate: "2023-06-17"
      },
      {
        spotId: 7,
        userId: 20,
        startDate: "2023-06-18",
        endDate: "2023-06-19"
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
    options.tableName = 'Bookings';
    return queryInterface.bulkDelete(options, {}, {})
  }
};
