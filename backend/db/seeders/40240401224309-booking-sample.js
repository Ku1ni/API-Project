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
        startDate: "2024-06-10",
        endDate: "2024-06-11"
      },
      {
        spotId: 1,
        userId: 2,
        startDate: "2024-06-12",
        endDate: "2024-06-13"
      },
      {
        spotId: 1,
        userId: 3,
        startDate: "2024-06-14",
        endDate: "2024-06-15"
      },
      {
        spotId: 2,
        userId: 4,
        startDate: "2024-06-11",
        endDate: "2024-06-12"
      },
      {
        spotId: 2,
        userId: 5,
        startDate: "2024-06-13",
        endDate: "2024-06-14"
      },
      {
        spotId: 2,
        userId: 6,
        startDate: "2024-06-15",
        endDate: "2024-06-16"
      },
      {
        spotId: 1,
        userId: 1,
        startDate: "2024-06-10",
        endDate: "2024-06-11"
      },
      {
        spotId: 1,
        userId: 2,
        startDate: "2024-06-12",
        endDate: "2024-06-13"
      },
      {
        spotId: 1,
        userId: 3,
        startDate: "2024-06-14",
        endDate: "2024-06-15"
      },
      {
        spotId: 2,
        userId: 4,
        startDate: "2024-06-11",
        endDate: "2024-06-12"
      },
      {
        spotId: 2,
        userId: 5,
        startDate: "2024-06-13",
        endDate: "2024-06-14"
      },
      {
        spotId: 2,
        userId: 6,
        startDate: "2024-06-15",
        endDate: "2024-06-16"
      },
      {
        spotId: 3,
        userId: 7,
        startDate: "2024-06-12",
        endDate: "2024-06-13"
      },
      {
        spotId: 3,
        userId: 8,
        startDate: "2024-06-14",
        endDate: "2024-06-15"
      },
      {
        spotId: 3,
        userId: 9,
        startDate: "2024-06-16",
        endDate: "2024-06-17"
      },
      {
        spotId: 4,
        userId: 10,
        startDate: "2024-06-13",
        endDate: "2024-06-14"
      },
      {
        spotId: 4,
        userId: 11,
        startDate: "2024-06-15",
        endDate: "2024-06-16"
      },
      {
        spotId: 4,
        userId: 12,
        startDate: "2024-06-17",
        endDate: "2024-06-18"
      },
      {
        spotId: 5,
        userId: 13,
        startDate: "2024-06-14",
        endDate: "2024-06-15"
      },
      {
        spotId: 5,
        userId: 14,
        startDate: "2024-06-16",
        endDate: "2024-06-17"
      },
      {
        spotId: 5,
        userId: 15,
        startDate: "2024-06-18",
        endDate: "2024-06-19"
      },
      {
        spotId: 6,
        userId: 16,
        startDate: "2024-06-15",
        endDate: "2024-06-16"
      },
      {
        spotId: 6,
        userId: 17,
        startDate: "2024-06-17",
        endDate: "2024-06-18"
      },
      {
        spotId: 6,
        userId: 18,
        startDate: "2024-06-19",
        endDate: "2024-06-20"
      },
      {
        spotId: 7,
        userId: 19,
        startDate: "2024-06-16",
        endDate: "2024-06-17"
      },
      {
        spotId: 7,
        userId: 20,
        startDate: "2024-06-18",
        endDate: "2024-06-19"
      },
      {
        spotId: 7,
        userId: 21,
        startDate: "2024-06-20",
        endDate: "2024-06-21"
      },
      {
        spotId: 8,
        userId: 22,
        startDate: "2024-06-17",
        endDate: "2024-06-18"
      },
      {
        spotId: 8,
        userId: 23,
        startDate: "2024-06-19",
        endDate: "2024-06-20"
      },
      {
        spotId: 8,
        userId: 24,
        startDate: "2024-06-21",
        endDate: "2024-06-22"
      },
      {
        spotId: 9,
        userId: 25,
        startDate: "2024-06-18",
        endDate: "2024-06-19"
      },
      {
        spotId: 9,
        userId: 26,
        startDate: "2024-06-20",
        endDate: "2024-06-21"
      },
      {
        spotId: 9,
        userId: 27,
        startDate: "2024-06-22",
        endDate: "2024-06-23"
      },
      {
        spotId: 10,
        userId: 28,
        startDate: "2024-06-19",
        endDate: "2024-06-20"
      },
      {
        spotId: 10,
        userId: 29,
        startDate: "2024-06-21",
        endDate: "2024-06-22"
      },
      {
        spotId: 10,
        userId: 30,
        startDate: "2024-06-23",
        endDate: "2024-06-24"
      },
      {
        spotId: 11,
        userId: 31,
        startDate: "2024-06-20",
        endDate: "2024-06-21"
      },
      {
        spotId: 11,
        userId: 32,
        startDate: "2024-06-22",
        endDate: "2024-06-23"
      },
      {
        spotId: 11,
        userId: 33,
        startDate: "2024-06-24",
        endDate: "2024-06-25"
      },
      {
        spotId: 12,
        userId: 34,
        startDate: "2024-06-21",
        endDate: "2024-06-22"
      },
      {
        spotId: 12,
        userId: 35,
        startDate: "2024-06-23",
        endDate: "2024-06-24"
      },
      {
        spotId: 12,
        userId: 36,
        startDate: "2024-06-25",
        endDate: "2024-06-26"
      },
      {
        spotId: 13,
        userId: 37,
        startDate: "2024-06-22",
        endDate: "2024-06-23"
      },
      {
        spotId: 13,
        userId: 38,
        startDate: "2024-06-24",
        endDate: "2024-06-25"
      },
      {
        spotId: 13,
        userId: 39,
        startDate: "2024-06-26",
        endDate: "2024-06-27"
      },
      {
        spotId: 14,
        userId: 40,
        startDate: "2024-06-23",
        endDate: "2024-06-24"
      },
      {
        spotId: 14,
        userId: 41,
        startDate: "2024-06-25",
        endDate: "2024-06-26"
      },
      {
        spotId: 14,
        userId: 42,
        startDate: "2024-06-27",
        endDate: "2024-06-28"
      },
      {
        spotId: 15,
        userId: 43,
        startDate: "2024-06-24",
        endDate: "2024-06-25"
      },
      {
        spotId: 15,
        userId: 44,
        startDate: "2024-06-26",
        endDate: "2024-06-27"
      },
      {
        spotId: 15,
        userId: 45,
        startDate: "2024-06-28",
        endDate: "2024-06-29"
      },
      {
        spotId: 16,
        userId: 46,
        startDate: "2024-06-25",
        endDate: "2024-06-26"
      },
      {
        spotId: 16,
        userId: 47,
        startDate: "2024-06-27",
        endDate: "2024-06-28"
      },
      {
        spotId: 16,
        userId: 48,
        startDate: "2024-06-29",
        endDate: "2024-06-30"
      },
      {
        spotId: 17,
        userId: 49,
        startDate: "2024-06-26",
        endDate: "2024-06-27"
      },
      {
        spotId: 17,
        userId: 50,
        startDate: "2024-06-28",
        endDate: "2024-06-29"
      },
      {
        spotId: 17,
        userId: 51,
        startDate: "2024-06-30",
        endDate: "2024-07-01"
      },
      {
        spotId: 18,
        userId: 52,
        startDate: "2024-06-27",
        endDate: "2024-06-28"
      },
      {
        spotId: 18,
        userId: 53,
        startDate: "2024-06-29",
        endDate: "2024-06-30"
      },
      {
        spotId: 18,
        userId: 54,
        startDate: "2024-07-01",
        endDate: "2024-07-02"
      },
      {
        spotId: 19,
        userId: 55,
        startDate: "2024-06-28",
        endDate: "2024-06-29"
      },
      {
        spotId: 19,
        userId: 56,
        startDate: "2024-06-30",
        endDate: "2024-07-01"
      },
      {
        spotId: 19,
        userId: 57,
        startDate: "2024-07-02",
        endDate: "2024-07-03"
      },
      {
        spotId: 20,
        userId: 58,
        startDate: "2024-06-29",
        endDate: "2024-06-30"
      },
      {
        spotId: 20,
        userId: 59,
        startDate: "2024-07-01",
        endDate: "2024-07-02"
      },
      {
        spotId: 20,
        userId: 60,
        startDate: "2024-07-03",
        endDate: "2024-07-04"
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
    options.tableName = 'Bookings';
    return queryInterface.bulkDelete(options, {}, {})
  }
};
