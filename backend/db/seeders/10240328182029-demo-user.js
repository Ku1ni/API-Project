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
    },
    {
      email: "user22@user.io",
      username: "FakeUser22",
      firstName: "Luna",
      lastName: "King",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user23@user.io",
      username: "FakeUser23",
      firstName: "Jackson",
      lastName: "Wright",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user24@user.io",
      username: "FakeUser24",
      firstName: "Scarlett",
      lastName: "Robinson",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user25@user.io",
      username: "FakeUser25",
      firstName: "Carter",
      lastName: "Perez",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user26@user.io",
      username: "FakeUser26",
      firstName: "Chloe",
      lastName: "Howard",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user27@user.io",
      username: "FakeUser27",
      firstName: "Sebastian",
      lastName: "Carter",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user28@user.io",
      username: "FakeUser28",
      firstName: "Zoe",
      lastName: "Ember",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user29@user.io",
      username: "FakeUser29",
      firstName: "Liam",
      lastName: "Patterson",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user30@user.io",
      username: "FakeUser30",
      firstName: "Grace",
      lastName: "Flores",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user31@user.io",
      username: "FakeUser31",
      firstName: "Nolan",
      lastName: "Cook",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user32@user.io",
      username: "FakeUser32",
      firstName: "Avery",
      lastName: "Morris",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user33@user.io",
      username: "FakeUser33",
      firstName: "Sofia",
      lastName: "Gray",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user34@user.io",
      username: "FakeUser34",
      firstName: "Elijah",
      lastName: "Bell",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user35@user.io",
      username: "FakeUser35",
      firstName: "Nora",
      lastName: "Sanders",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user36@user.io",
      username: "FakeUser36",
      firstName: "Aiden",
      lastName: "Henderson",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user37@user.io",
      username: "FakeUser37",
      firstName: "Ellie",
      lastName: "Bryant",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user38@user.io",
      username: "FakeUser38",
      firstName: "Logan",
      lastName: "Reed",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user39@user.io",
      username: "FakeUser39",
      firstName: "Hannah",
      lastName: "Washington",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user40@user.io",
      username: "FakeUser40",
      firstName: "Mateo",
      lastName: "Evans",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user41@user.io",
      username: "FakeUser41",
      firstName: "Aria",
      lastName: "Cooper",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user42@user.io",
      username: "FakeUser42",
      firstName: "Caleb",
      lastName: "Parker",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user43@user.io",
      username: "FakeUser43",
      firstName: "Lily",
      lastName: "Cox",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user44@user.io",
      username: "FakeUser44",
      firstName: "Muhammad",
      lastName: "Rogers",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user45@user.io",
      username: "FakeUser45",
      firstName: "Penelope",
      lastName: "Hayes",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user46@user.io",
      username: "FakeUser46",
      firstName: "Mason",
      lastName: "Foster",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user47@user.io",
      username: "FakeUser47",
      firstName: "Layla",
      lastName: "Simmons",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user48@user.io",
      username: "FakeUser48",
      firstName: "Alexander",
      lastName: "Woods",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user49@user.io",
      username: "FakeUser49",
      firstName: "Aurora",
      lastName: "Perry",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user50@user.io",
      username: "FakeUser50",
      firstName: "Wyatt",
      lastName: "Russell",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user51@user.io",
      username: "FakeUser51",
      firstName: "Victoria",
      lastName: "Griffin",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user52@user.io",
      username: "FakeUser52",
      firstName: "Michael",
      lastName: "Gordon",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user53@user.io",
      username: "FakeUser53",
      firstName: "Audrey",
      lastName: "Shaw",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user54@user.io",
      username: "FakeUser54",
      firstName: "Gabriel",
      lastName: "Holmes",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user55@user.io",
      username: "FakeUser55",
      firstName: "Elizabeth",
      lastName: "Coleman",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user56@user.io",
      username: "FakeUser56",
      firstName: "Emma",
      lastName: "Long",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user57@user.io",
      username: "FakeUser57",
      firstName: "Nathan",
      lastName: "Kelly",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user58@user.io",
      username: "FakeUser58",
      firstName: "Leah",
      lastName: "Powell",
      hashedPassword: bcrypt.hashSync('password2', 16)
    },
    {
      email: "user59@user.io",
      username: "FakeUser59",
      firstName: "Daniel",
      lastName: "Bennett",
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
