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
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-663069238504457532/original/416ff6ae-63cb-4886-8379-219fed4b9f0d.jpeg?im_w=1200",
      preview: true
    },
      {
        spotId: 1,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-663069238504457532/original/ee6c44df-4356-45cd-b980-3300f26fba45.jpeg?im_w=1440",
        preview: true
      },
    {
      spotId: 2,
      url: "https://cdn.trendir.com/wp-content/uploads/old/house-design/2015/11/12/malibu-beach-house-ocean-side.jpg",
      preview: true
    },
    {
      spotId: 3,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-903577566536854491/original/56b177e2-665b-4a5f-9f23-976e461f8bb4.jpeg?im_w=960",
      preview: true
    },
    {
      spotId: 4,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-786224661243244923/original/fa078532-fbd3-431f-be8c-2f898afc0562.jpeg?im_w=960",
      preview: true
    },
    {
      spotId: 5,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-750635641953525714/original/535bee34-a11d-4037-83ce-f7a5e51c2e14.jpeg?im_w=960",
      preview: true
    },
    {
      spotId: 6,
      url: "https://a0.muscache.com/im/pictures/a59f8227-ed8e-432d-b2d4-59943a476b3f.jpg?im_w=960",
      preview: true
    },
    {
      spotId: 7,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-888409401767445232/original/157896f4-3fce-4743-8f07-d54d7e55e2e4.jpeg?im_w=960",
      preview: true
    },
    {
      spotId: 8,
      url: "https://a0.muscache.com/im/pictures/e240d97c-82c6-4ee7-9bd6-ece1b364d51b.jpg?im_w=960",
      preview: true
    },
    {
      spotId: 9,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-880435645118348170/original/4f9645bc-fc99-43b4-b0d2-f89207258d86.jpeg?im_w=960",
      preview: true
    },
    {
      spotId: 10,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-1154274044511200673/original/49c6501b-63d3-452d-8eba-9a1315718615.jpeg?im_w=960",
      preview: true
    },
    {
      spotId: 11,
      url: "https://a0.muscache.com/im/pictures/37e5900d-d674-4c94-85a2-4e2cdb575252.jpg?im_w=960",
      preview: true
    },
    {
      spotId: 12,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-658867879961147273/original/08f6d851-f015-4227-92e7-caa3440f7ac5.jpeg?im_w=960",
      preview: true
    },
    {
      spotId: 13,
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-52217377/original/5d71b1f3-819b-4273-b705-cfba132f99b9.jpeg?im_w=960",
      preview: true
    },
    {
      spotId: 14,
      url: "https://a0.muscache.com/im/pictures/644bca13-9e07-4809-8ab3-ebcb7aed1f36.jpg?im_w=960",
      preview: true
    },
    {
      spotId: 15,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-866461098062449880/original/51536ed2-3f98-4ec0-a80f-d4ec3709b2bb.jpeg?im_w=960",
      preview: true
    },
    {
      spotId: 16,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1132650752634524552/original/190f6f50-0e91-4227-8c59-9ac7f3ce1537.jpeg?im_w=960",
      preview: true
    },
    {
      spotId: 17,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-557449004853619807/original/6a3b4335-822f-4a45-8fe3-418bf9a36392.jpeg?im_w=960",
      preview: true
    },
    {
      spotId: 18,
      url: "https://a0.muscache.com/im/pictures/508e285f-bd26-47e3-a33b-f2924651e627.jpg?im_w=960",
      preview: true
    },
    {
      spotId: 19,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-48699761/original/ac31b7fb-d5cb-4f16-8b0c-23a73095c86b.jpeg?im_w=720",
      preview: true
    },
    {
      spotId: 20,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-998766210338307723/original/c6e75226-1637-43a7-90fe-b2ba2b2745c1.jpeg?im_w=720",
      preview: true
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
    options.tableName = 'SpotImages';
    return queryInterface.bulkDelete(options, {}, {})
  }
};
