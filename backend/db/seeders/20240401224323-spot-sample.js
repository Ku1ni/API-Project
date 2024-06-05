'use strict';
const { Spot } = require('../models')

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
    await Spot.bulkCreate([
      {
        ownerId: 1,
        address: "22 Rowes Pl",
        city: "Heathsville",
        state: "Virginia",
        country: "United States of America",
        lat: 37.936352,
        lng: -76.483194,
        name: "Tranquil Beachfront Getaway on the Chesapeake Bay",
        description: "Recharge your battery and reset your mind by staying at our waterfront paradise.",
        price: 322,
      },
      //https://photos.zillowstatic.com/fp/1315f8e320a2c350a2ec9255fc41e172-cc_ft_384.webp
      //https://www.zillow.com/homedetails/505-S-County-Line-Rd-Hinsdale-IL-60521/3893460_zpid/
      {
        ownerId: 1,
        address: "7S719 Donwood Dr",
        city: "Naperville",
        state: "Illinois",
        country: "United States of America",
        lat: 41.758121,
        lng: -88.090211,
        name: "BOULEVARD MANSION",
        description: "As soon as you step inside, you'll be struck by the magnificence of the design and construction, which showcases the finer things in life.",
        price: 900
      },
      {
        ownerId: 2,
        address: "451 E Grand Ave #65",
        city: "Chicago",
        state: "Illinois",
        country: "United States of America",
        lat: 41.891319,
        lng: -87.615295,
        name: "PENTHOUSE 65",
        description: "Gracing the crown of this iconic lakefront tower, Penthouse 65 is being offered as a fully designed and finished turn-key residence by Robert A.M. Stern Architects and Related's accomplished interiors team.",
        price: 1200
      },
      {
        ownerId: 3,
        address: "17519 Lincoln Rd",
        city: "Harvard",
        state: "Illinois",
        country: "United States of America",
        lat: 42.410960,
        lng: -88.537646,
        name: "Somerset Manor",
        description: "This English Manor is positioned perfectly to capture the beautiful surroundings in every way.",
        price: 1050
      },
      {
        ownerId: 3,
        address: "9303 North Valley Hill ROAD",
        city: "River Hills",
        state: "Wisconsin",
        country: "United States of America",
        lat: 43.183638,
        lng: -87.947749,
        name: "Lakeside Mansion",
        description: "One of the finest estates in all of SE Wisconsin!  Close to Lake Michigan, and minutes to downtown and the best Milwaukee has to offer.",
        price: 800
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
    options.tableName = 'Spots';
    return queryInterface.bulkDelete(options, {}, {});
  }
};
