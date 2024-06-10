'use strict';
const { User } = require('../models');
const bcrypt = require("bcryptjs");
let options = {};

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
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

   await User.bulkCreate([
    {
      email: 'demo@user.io',
      username: 'Demo-lition',
      firstName: 'John',
      lastName: 'Smith',
      hashedPassword: bcrypt.hashSync('password', 16)
    },
    {
      email: 'user1@user.io',
      username: 'FakeUser1',
      firstName: 'Andrew',
      lastName: 'Otters',
      hashedPassword: bcrypt.hashSync('password3', 16)
    },
    {
      email: 'user2@user.io',
      username: 'FakeUser2',
      firstName: 'John',
      lastName: 'Doe',
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: 'user3@user.io',
      username: 'FakeUser3',
      firstName: 'Emma',
      lastName: 'Smith',
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: 'user4@user.io',
      username: 'FakeUser4',
      firstName: 'Mike',
      lastName: 'Johnson',
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: 'user5@user.io',
      username: 'FakeUser5',
      firstName: 'Sophia',
      lastName: 'Brown',
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: 'user6@user.io',
      username: 'FakeUser6',
      firstName: 'Oliver',
      lastName: 'Taylor',
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: 'user7@user.io',
      username: 'FakeUser7',
      firstName: 'Emily',
      lastName: 'Martinez',
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: 'user8@user.io',
      username: 'FakeUser8',
      firstName: 'William',
      lastName: 'Anderson',
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: 'user9@user.io',
      username: 'FakeUser9',
      firstName: 'Amelia',
      lastName: 'Thomas',
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: 'user10@user.io',
      username: 'FakeUser10',
      firstName: 'James',
      lastName: 'Jackson',
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: 'user11@user.io',
      username: 'FakeUser11',
      firstName: 'Isabella',
      lastName: 'White',
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: 'user12@user.io',
      username: 'FakeUser12',
      firstName: 'Liam',
      lastName: 'Harris',
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: 'user13@user.io',
      username: 'FakeUser13',
      firstName: 'Ava',
      lastName: 'Martin',
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: 'user14@user.io',
      username: 'FakeUser14',
      firstName: 'Benjamin',
      lastName: 'Thompson',
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: 'user15@user.io',
      username: 'FakeUser15',
      firstName: 'Mia',
      lastName: 'Garcia',
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: 'user16@user.io',
      username: 'FakeUser16',
      firstName: 'Lucas',
      lastName: 'Martinez',
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: 'user17@user.io',
      username: 'FakeUser17',
      firstName: 'Charlotte',
      lastName: 'Allen',
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: 'user18@user.io',
      username: 'FakeUser18',
      firstName: 'Ethan',
      lastName: 'Adams',
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: 'user19@user.io',
      username: 'FakeUser19',
      firstName: 'Harper',
      lastName: 'Lewis',
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: 'user20@user.io',
      username: 'FakeUser20',
      firstName: 'Evelyn',
      lastName: 'Nelson',
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: 'user21@user.io',
      username: 'FakeUser21',
      firstName: 'Henry',
      lastName: 'Hill',
      hashedPassword: bcrypt.hashSync('password2', 16)
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
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
