'use strict';
const { SpotImages } = require('../models');

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
   await SpotImages.bulkCreate([
    {
      spotId: 1,
      url: "https://photos.zillowstatic.com/fp/1315f8e320a2c350a2ec9255fc41e172-cc_ft_384.webp",
      preview: true
    },
    {
      spotId: 2,
      url: "https://photos.zillowstatic.com/fp/62a9d35288050ded374002f66e4118ba-cc_ft_576.webp",
      preview: true
    },
    {
      spotId: 3,
      url: "https://photos.zillowstatic.com/fp/c7830d7a5ae639ddaafcfd7cea8880ec-cc_ft_576.webp",
      preview: true
    },
    {
      spotId: 4,
      url: "https://photos.zillowstatic.com/fp/05f1eb6365db6ce2ff26e377feb68fd6-cc_ft_768.webp",
      preview: true
    },
    {
      spotId: 5,
      url: "https://photos.zillowstatic.com/fp/28f489b1b4658a67d2b3af1cdd127001-cc_ft_768.webp",
      preview: true
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
    options.tableName = 'SpotImages';
    return queryInterface.bulkDelete(options, {}, {})
  }
};
