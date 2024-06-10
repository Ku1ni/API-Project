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
            price: 322
        },
        {
            ownerId: 2,
            address: "123 Ocean View Dr",
            city: "Malibu",
            state: "California",
            country: "United States of America",
            lat: 34.025922,
            lng: -118.779757,
            name: "Beachfront Bliss Retreat",
            description: "Escape to our serene beachfront retreat and indulge in panoramic ocean views.",
            price: 450
        },
        {
            ownerId: 4,
            address: "456 Beachside Ave",
            city: "Key West",
            state: "Florida",
            country: "United States of America",
            lat: 24.562341,
            lng: -81.797107,
            name: "Sunset Serenity Villa",
            description: "Experience the magic of Key West sunsets from our luxurious beach villa.",
            price: 550
        },
        {
            ownerId: 4,
            address: "789 Seaside Rd",
            city: "Cape Cod",
            state: "Massachusetts",
            country: "United States of America",
            lat: 41.930671,
            lng: -70.016274,
            name: "Coastal Haven Cottage",
            description: "Find tranquility at our cozy beachfront cottage nestled on the shores of Cape Cod.",
            price: 300
        },
        {
            ownerId: 5,
            address: "101 Sandy Beach Blvd",
            city: "Hilton Head Island",
            state: "South Carolina",
            country: "United States of America",
            lat: 32.15903,
            lng: -80.756378,
            name: "Seaside Sanctuary",
            description: "Retreat to our elegant beachfront villa and let the sound of waves soothe your soul.",
            price: 400
        },
        {
            ownerId: 6,
            address: "246 Shoreline Dr",
            city: "Santa Barbara",
            state: "California",
            country: "United States of America",
            lat: 34.409258,
            lng: -119.688653,
            name: "Oceanfront Oasis",
            description: "Discover luxury and relaxation at our stunning oceanfront oasis in Santa Barbara.",
            price: 600
        },
        {
            ownerId: 7,
            address: "369 Beach Haven Ln",
            city: "Outer Banks",
            state: "North Carolina",
            country: "United States of America",
            lat: 35.558723,
            lng: -75.466677,
            name: "Sandy Shores Retreat",
            description: "Enjoy the perfect blend of comfort and coastal charm at our beachfront retreat on the Outer Banks.",
            price: 350
        },
        {
            ownerId: 8,
            address: "987 Palm Tree Ave",
            city: "Maui",
            state: "Hawaii",
            country: "United States of America",
            lat: 20.798363,
            lng: -156.331924,
            name: "Tropical Beach Bungalow",
            description: "Experience island paradise at our charming beach bungalow overlooking the crystal-clear waters of Maui.",
            price: 700
        },
        {
            ownerId: 9,
            address: "741 Coastal Retreat Rd",
            city: "Destin",
            state: "Florida",
            country: "United States of America",
            lat: 30.39108,
            lng: -86.528196,
            name: "Seaside Splendor Villa",
            description: "Immerse yourself in luxury at our beachfront villa offering breathtaking views of the Gulf of Mexico.",
            price: 500
        },
        {
            ownerId: 10,
            address: "22 Rowes Pl",
            city: "Heathsville",
            state: "Virginia",
            country: "United States of America",
            lat: 37.936352,
            lng: -76.483194,
            name: "Tranquil Beachfront Getaway",
            description: "Recharge your battery and reset your mind by staying at our waterfront paradise.",
            price: 322
        },
        {
            ownerId: 11,
            address: "555 Coastal Dr",
            city: "Carmel-by-the-Sea",
            state: "California",
            country: "United States of America",
            lat: 36.555289,
            lng: -121.923795,
            name: "Seaview Haven",
            description: "Enjoy unparalleled ocean views and coastal charm at our beachfront retreat in Carmel.",
            price: 600
        },
        {
            ownerId: 12,
            address: "777 Sandy Cove Rd",
            city: "Myrtle Beach",
            state: "South Carolina",
            country: "United States of America",
            lat: 33.682678,
            lng: -78.893491,
            name: "Beachfront Paradise Villa",
            description: "Experience the ultimate relaxation at our luxurious beachfront villa in Myrtle Beach.",
            price: 450
        },
        {
            ownerId: 13,
            address: "999 Shoreline Dr",
            city: "Nantucket",
            state: "Massachusetts",
            country: "United States of America",
            lat: 41.283924,
            lng: -70.098654,
            name: "Seaside Escape Cottage",
            description: "Retreat to our charming beachfront cottage and unwind amidst the natural beauty of Nantucket.",
            price: 400
        },
        {
            ownerId: 14,
            address: "111 Beachfront Ave",
            city: "San Diego",
            state: "California",
            country: "United States of America",
            lat: 32.776271,
            lng: -117.238562,
            name: "Coastal Charm Retreat",
            description: "Discover coastal luxury and relaxation at our exquisite beachfront retreat in San Diego.",
            price: 550
        },
        {
            ownerId: 15,
            address: "222 Seaside Blvd",
            city: "Charleston",
            state: "South Carolina",
            country: "United States of America",
            lat: 32.776475,
            lng: -79.931051,
            name: "Charleston Shores",
            description: "Escape to our secluded oceanfront hideaway and bask in the tranquility of Charleston's shores.",
            price: 400
        },
        {
            ownerId: 16,
            address: "333 Coastal Trail",
            city: "Big Sur",
            state: "California",
            country: "United States of America",
            lat: 36.270421,
            lng: -121.807976,
            name: "Big Sur Coastal Haven",
            description: "Immerse yourself in the rugged beauty of Big Sur at our serene coastal retreat.",
            price: 400
        },
        {
            ownerId: 17,
            address: "123 Beachfront Blvd",
            city: "Laguna Beach",
            state: "California",
            country: "United States of America",
            lat: 33.54272,
            lng: -117.78536,
            name: "Laguna Beach Retreat",
            description: "Relax in luxury at our stunning beachfront retreat in Laguna Beach.",
            price: 500
        },
        {
            ownerId: 18,
            address: "456 Ocean Drive",
            city: "Miami Beach",
            state: "Florida",
            country: "United States of America",
            lat: 25.790654,
            lng: -80.130045,
            name: "Miami Beachfront Villa",
            description: "Experience the vibrant life of Miami Beach from our luxurious beachfront villa.",
            price: 600
        },
        {
            ownerId: 19,
            address: "789 Sunset Lane",
            city: "Malibu",
            state: "California",
            country: "United States of America",
            lat: 34.025922,
            lng: -118.779757,
            name: "Malibu Oceanfront Escape",
            description: "Find peace and serenity at our elegant oceanfront escape in Malibu.",
            price: 700
        },
        {
            ownerId: 20,
            address: "321 Seaview Avenue",
            city: "Honolulu",
            state: "Hawaii",
            country: "United States of America",
            lat: 21.306944,
            lng: -157.858333,
            name: "Honolulu Beach House",
            description: "Enjoy the ultimate Hawaiian getaway at our luxurious beachfront house in Honolulu.",
            price: 650
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
