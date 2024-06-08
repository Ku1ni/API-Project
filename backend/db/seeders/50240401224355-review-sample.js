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
    {
      userId: 11,
      spotId: 4,
      review: "Average spot with decent amenities.",
      stars: 3
    },
    {
      userId: 12,
      spotId: 4,
      review: "I was not satisfied with this spot. It was not as advertised.",
      stars: 5
    },
    {
      userId: 13,
      spotId: 5,
      review: "Excellent spot! Clean, comfortable, and convenient.",
      stars: 5
    },
    {
      userId: 14,
      spotId: 5,
      review: "Decent spot, but could use some updates.",
      stars: 3
    },
    {
      userId: 15,
      spotId: 5,
      review: "Unfortunately, this spot was not well-maintained. Disappointing experience.",
      stars: 4
    },
    {
      userId: 16,
      spotId: 6,
      review: "Lovely spot with breathtaking views! Would definitely stay here again.",
      stars: 5
    },
    {
      userId: 17,
      spotId: 6,
      review: "Average spot with decent amenities.",
      stars: 3
    },
    {
      userId: 18,
      spotId: 6,
      review: "This spot was not as expected. Needs improvement in cleanliness and facilities.",
      stars: 2
    },
    {
      userId: 19,
      spotId: 7,
      review: "Great spot with excellent facilities. Would recommend to anyone!",
      stars: 5
    },
    {
      userId: 20,
      spotId: 7,
      review: "Decent spot, but could use some updates.",
      stars: 4
    },
    {
      userId: 21,
      spotId: 7,
      review: "Unfortunately, this spot didn't meet my expectations. It was not well-maintained.",
      stars: 2
    },
    {
      userId: 22,
      spotId: 8,
      review: "Wonderful spot with great amenities. Enjoyed my stay thoroughly!",
      stars: 5
    },
    {
      userId: 23,
      spotId: 8,
      review: "Average spot with decent facilities.",
      stars: 3
    },
    {
      userId: 24,
      spotId: 8,
      review: "Not satisfied with this spot. Needs improvement in cleanliness.",
      stars: 4
    },
    {
      userId: 25,
      spotId: 9,
      review: "Great spot with excellent facilities. Enjoyed my stay!",
      stars: 4
    },
    {
      userId: 26,
      spotId: 9,
      review: "Average spot with decent amenities.",
      stars: 3
    },
    {
      userId: 27,
      spotId: 9,
      review: "This spot was disappointing. Needs improvement in cleanliness and maintenance.",
      stars: 2
    },
    {
      userId: 28,
      spotId: 10,
      review: "This spot was perfect for my needs. Clean and comfortable!",
      stars: 4
    },
    {
      userId: 29,
      spotId: 10,
      review: "Decent spot with adequate amenities.",
      stars: 3
    },
    {
      userId: 30,
      spotId: 10,
      review: "Unfortunately, this spot didn't meet my expectations. It was not well-maintained.",
      stars: 1
    },
    {
      userId: 31,
      spotId: 11,
      review: "Great spot with fantastic amenities! Highly recommend.",
      stars: 3
    },
    {
      userId: 32,
      spotId: 11,
      review: "Average spot with decent facilities.",
      stars: 3
    },
    {
      userId: 33,
      spotId: 11,
      review: "Not satisfied with this spot. Needs improvement in cleanliness.",
      stars: 2
    },
    {
      userId: 34,
      spotId: 12,
      review: "Excellent spot! Clean, comfortable, and convenient.",
      stars: 5
    },
    {
      userId: 35,
      spotId: 12,
      review: "Decent spot, but could use some updates in facilities.",
      stars: 4
    },
    {
      userId: 36,
      spotId: 12,
      review: "Unfortunately, this spot was not well-maintained. Disappointing experience.",
      stars: 2
    },
    {
      userId: 37,
      spotId: 13,
      review: "Lovely spot with breathtaking views! Would definitely stay here again.",
      stars: 5
    },
    {
      userId: 38,
      spotId: 13,
      review: "Average spot with decent amenities.",
      stars: 3
    },
    {
      userId: 39,
      spotId: 13,
      review: "This spot was disappointing. Needs improvement in cleanliness and maintenance.",
      stars: 3
    },
    {
      userId: 40,
      spotId: 14,
      review: "Wonderful spot with great amenities. Enjoyed my stay thoroughly!",
      stars: 5
    },
    {
      userId: 41,
      spotId: 14,
      review: "Average spot with decent facilities.",
      stars: 4
    },
    {
      userId: 42,
      spotId: 14,
      review: "Not satisfied with this spot. Needs improvement in cleanliness.",
      stars: 2
    },
    {
    userId: 43,
    spotId: 15,
    review: "Great spot with fantastic amenities! Highly recommend.",
    stars: 5
    },
    {
    userId: 44,
    spotId: 15,
    review: "Average spot with decent facilities.",
    stars: 3
    },
    {
    userId: 45,
    spotId: 15,
    review: "Unfortunately, this spot didn't meet my expectations. It was not well-maintained.",
    stars: 1
    },
    {
    userId: 46,
    spotId: 16,
    review: "This spot was perfect for my needs. Clean and comfortable!",
    stars: 4
    },
    {
    userId: 47,
    spotId: 16,
    review: "Decent spot with adequate amenities.",
    stars: 3
    },
    {
    userId: 48,
    spotId: 16,
    review: "Unfortunately, this spot didn't meet my expectations. It was not well-maintained.",
    stars: 2
    },
    {
    userId: 49,
    spotId: 17,
    review: "Great spot with fantastic amenities! Highly recommend.",
    stars: 5
    },
    {
    userId: 50,
    spotId: 17,
    review: "Average spot with decent facilities.",
    stars: 2
    },
    {
    userId: 51,
    spotId: 17,
    review: "Not satisfied with this spot. Needs improvement in cleanliness.",
    stars: 1
    },
    {
    userId: 52,
    spotId: 18,
    review: "Excellent spot! Clean, comfortable, and convenient.",
    stars: 5
    },
    {
    userId: 53,
    spotId: 18,
    review: "Decent spot, but could use some updates in facilities.",
    stars: 2
    },
    {
    userId: 54,
    spotId: 18,
    review: "This spot was disappointing. Needs improvement in cleanliness and maintenance.",
    stars: 2
    },
    {
    userId: 55,
    spotId: 19,
    review: "Lovely spot with breathtaking views! Would definitely stay here again.",
    stars: 5
    },
    {
    userId: 56,
    spotId: 19,
    review: "Average spot with decent amenities.",
    stars: 4
    },
    {
    userId: 57,
    spotId: 19,
    review: "Unfortunately, this spot was not well-maintained. Disappointing experience.",
    stars: 2
    },
    {
    userId: 58,
    spotId: 20,
    review: "Great spot with fantastic amenities! Highly recommend.",
    stars: 5
    },
    {
    userId: 59,
    spotId: 20,
    review: "Average spot with decent facilities.",
    stars: 5
    },
    {
    userId: 60,
    spotId: 20,
    review: "Not satisfied with this spot. Needs improvement in cleanliness.",
    stars: 1
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
    options.tableName = 'Reviews';
    return queryInterface.bulkDelete(options, {}, {});
  }
};
