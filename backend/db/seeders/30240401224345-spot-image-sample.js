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
          spotId: 1,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-663069238504457532/original/fbf79c5c-8127-4730-9a50-c8b9da1c68c7.jpeg?im_w=720",
          preview: true
      },
      {
          spotId: 1,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-663069238504457532/original/7a06ca10-8914-4d02-858a-8fea69539b6a.jpeg?im_w=1200",
          preview: true
      },
      {
          spotId: 1,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-663069238504457532/original/41a25e20-de1c-42f0-8e30-e56b1fb16383.jpeg?im_w=1200",
          preview: true
      },
      {
          spotId: 2,
          url: "https://cdn.trendir.com/wp-content/uploads/old/house-design/2015/11/12/malibu-beach-house-ocean-side.jpg",
          preview: true
      },
      {
          spotId: 2,
          url: "https://cdn.trendir.com/wp-content/uploads/old/house-design/2015/11/12/malibu-beach-house-ocean-side-2.jpg",
          preview: true
      },
      {
          spotId: 2,
          url: "https://cdn.trendir.com/wp-content/uploads/old/house-design/2015/11/12/malibu-beach-house-deck.jpg",
          preview: true
      },
      {
          spotId: 2,
          url: "https://cdn.trendir.com/wp-content/uploads/old/house-design/2015/11/12/malibu-beach-house-open-dining.jpg",
          preview: true
      },
      {
          spotId: 2,
          url: "https://cdn.trendir.com/wp-content/uploads/old/house-design/2015/11/12/malibu-beach-house-sliding-glass-doors.jpg",
          preview: true
      },
      {
          spotId: 3,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-903577566536854491/original/56b177e2-665b-4a5f-9f23-976e461f8bb4.jpeg?im_w=960",
          preview: true
      },
      {
          spotId: 3,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-903577566536854491/original/b406ca87-b2fd-4280-9415-dad3af81d828.jpeg?im_w=480",
          preview: true
      },
      {
          spotId: 3,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-903577566536854491/original/d78f0382-feba-43c7-844b-b62cdcc1109b.jpeg?im_w=480",
          preview: true
      },
      {
          spotId: 3,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-903577566536854491/original/ef900e4d-dd05-4698-bd7c-bbc395a5f079.jpeg?im_w=1200",
          preview: true
      },
      {
          spotId: 3,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-903577566536854491/original/8c471a5a-cb12-4a58-901e-ce51bc73d877.jpeg?im_w=1200",
          preview: true
      },
      {
          spotId: 4,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-786224661243244923/original/fa078532-fbd3-431f-be8c-2f898afc0562.jpeg?im_w=960",
          preview: true
      },
      {
          spotId: 4,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-786224661243244923/original/67852d6a-aecc-48a4-85af-0f248c915182.jpeg?im_w=1200",
          preview: true
      },
      {
          spotId: 4,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-786224661243244923/original/fa979b5b-c277-4439-990d-41e335f34dde.jpeg?im_w=1200",
          preview: true
      },
      {
          spotId: 4,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-786224661243244923/original/92961349-ae1d-41ca-853f-7273657e417c.jpeg?im_w=1200",
          preview: true
      },
      {
          spotId: 4,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-786224661243244923/original/9a05a347-3104-4c3f-9ab4-475b7aa982de.jpeg?im_w=720",
          preview: true
      },
      {
          spotId: 5,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-750635641953525714/original/535bee34-a11d-4037-83ce-f7a5e51c2e14.jpeg?im_w=960",
          preview: true
      },
      {
          spotId: 5,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-750635641953525714/original/baabf04c-f0d1-4e70-b591-c4233965e0b2.jpeg?im_w=480",
          preview: true
      },
      {
          spotId: 5,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-750635641953525714/original/e88d92a8-e05c-4785-a76e-1525c075de39.jpeg?im_w=1200",
          preview: true
      },
      {
          spotId: 5,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-750635641953525714/original/8ccc1423-a13a-42e6-a709-28d450f7ae5a.jpeg?im_w=1200",
          preview: true
      },
      {
          spotId: 5,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-750635641953525714/original/998be1ba-7fae-450f-8bfd-af441daab82d.jpeg?im_w=720",
          preview: true
      },
      {
          spotId: 6,
          url: "https://a0.muscache.com/im/pictures/a59f8227-ed8e-432d-b2d4-59943a476b3f.jpg?im_w=960",
          preview: true
      },
      {
          spotId: 6,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-36171781/original/310f4f6d-8d41-4eb6-b787-893dde38e7f0.jpeg?im_w=480",
          preview: true
      },
      {
          spotId: 6,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-36171781/original/88ba0790-17a5-4354-b53d-99ddd3b87d35.jpeg?im_w=480",
          preview: true
      },
      {
          spotId: 6,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-36171781/original/5cfce5e9-2730-4dce-8782-ce299d60c8b6.jpeg?im_w=480",
          preview: true
      },
      {
          spotId: 6,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-36171781/original/26fb8748-ca0d-4d10-a967-a10d72d55cc3.jpeg?im_w=480",
          preview: true
      },
      {
          spotId: 7,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-888409401767445232/original/157896f4-3fce-4743-8f07-d54d7e55e2e4.jpeg?im_w=960",
          preview: true
      },
      {
          spotId: 7,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-888409401767445232/original/451a135d-5473-4d85-8d30-16f3373a5c83.jpeg?im_w=480",
          preview: true
      },
      {
          spotId: 7,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-888409401767445232/original/23cf64ec-f6b4-4da0-a570-860c7f9c9a80.jpeg?im_w=480",
          preview: true
      },
      {
          spotId: 7,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-888409401767445232/original/23cf64ec-f6b4-4da0-a570-860c7f9c9a80.jpeg?im_w=480",
          preview: true
      },
      {
          spotId: 7,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-888409401767445232/original/cc41c07d-835b-4321-9d78-b11aff581d82.jpeg?im_w=1200",
          preview: true
      },
      {
          spotId: 8,
          url: "https://a0.muscache.com/im/pictures/e240d97c-82c6-4ee7-9bd6-ece1b364d51b.jpg?im_w=960",
          preview: true
      },
      {
          spotId: 8,
          url: "https://a0.muscache.com/im/pictures/0de71520-46c2-47fa-ac68-9d444c1dad73.jpg?im_w=480",
          preview: true
      },
      {
          spotId: 8,
          url: "https://a0.muscache.com/im/pictures/f02f5d03-e432-4add-b939-cb966122ec3b.jpg?im_w=480",
          preview: true
      },
      {
          spotId: 8,
          url: "https://a0.muscache.com/im/pictures/091070d4-61b0-4910-bafd-fb6b8b8b78c5.jpg?im_w=1200",
          preview: true
      },
      {
          spotId: 8,
          url: "https://a0.muscache.com/im/pictures/0c14f901-8212-4778-a911-353e9a7b7ccf.jpg?im_w=720",
          preview: true
      },
      {
          spotId: 9,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-880435645118348170/original/4f9645bc-fc99-43b4-b0d2-f89207258d86.jpeg?im_w=960",
          preview: true
      },
      {
          spotId: 9,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-880435645118348170/original/b718138b-e479-4764-a453-c98b4ca0c937.jpeg?im_w=480",
          preview: true
      },
      {
          spotId: 9,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-880435645118348170/original/1f906bd3-b5c3-448d-8a5b-9465cfd076af.jpeg?im_w=1200",
          preview: true
      },
      {
          spotId: 9,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-880435645118348170/original/2b0d3fcb-b77a-44fb-8995-6dc98ead9cae.jpeg?im_w=720",
          preview: true
      },
      {
          spotId: 9,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-880435645118348170/original/78cc2905-be96-4300-a327-433da6a81193.jpeg?im_w=720",
          preview: true
      },
      {
          spotId: 10,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-1154274044511200673/original/49c6501b-63d3-452d-8eba-9a1315718615.jpeg?im_w=960",
          preview: true
      },
      {
          spotId: 10,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-1154274044511200673/original/49c6501b-63d3-452d-8eba-9a1315718615.jpeg?im_w=960",
          preview: true
      },
      {
          spotId: 10,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-1154274044511200673/original/178c0a34-9484-4f79-b506-8fa23eaf0652.jpeg?im_w=1200",
          preview: true
      },
      {
          spotId: 10,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-1154274044511200673/original/0e0aca12-0179-4c91-9ed2-bd9c46270da0.jpeg?im_w=1200",
          preview: true
      },
      {
          spotId: 10,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-1154274044511200673/original/254e8724-11a7-4244-81a4-3ce6bbf808e0.jpeg?im_w=1200",
          preview: true
      },
      {
          spotId: 11,
          url: "https://a0.muscache.com/im/pictures/37e5900d-d674-4c94-85a2-4e2cdb575252.jpg?im_w=960",
          preview: true
      },
      {
          spotId: 11,
          url: "https://a0.muscache.com/im/pictures/ab1a9bf4-059f-44bc-84fd-81e9be9bc344.jpg?im_w=720",
          preview: true
      },
      {
          spotId: 11,
          url: "https://a0.muscache.com/im/pictures/b4ee80d5-e9d9-48cc-9bda-b2bd1a45022b.jpg?im_w=720",
          preview: true
      },
      {
          spotId: 11,
          url: "https://a0.muscache.com/im/pictures/5deb67ab-2242-4f42-b8a2-082317cc645c.jpg?im_w=720",
          preview: true
      },
      {
          spotId: 11,
          url: "https://a0.muscache.com/im/pictures/5548c19d-2174-4bb5-82e8-b7a71c6abfe4.jpg?im_w=1200",
          preview: true
      },
      {
          spotId: 12,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-658867879961147273/original/08f6d851-f015-4227-92e7-caa3440f7ac5.jpeg?im_w=960",
          preview: true
      },
      {
          spotId: 12,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-658867879961147273/original/8a9f4246-6f5a-43ca-a21e-3ca9b2aafb07.jpeg?im_w=1200",
          preview: true
        },
        {
            spotId: 12,
            url: "https://a0.muscache.com/im/pictures/miso/Hosting-658867879961147273/original/b37f3f0c-6a61-4db3-a1da-a0e2300500f9.jpeg?im_w=720",
            preview: true
        },
        {
            spotId: 12,
            url: "https://a0.muscache.com/im/pictures/miso/Hosting-658867879961147273/original/6736c15f-c4de-4393-a3f5-952965a57126.jpeg?im_w=720",
            preview: true
        },
        {
            spotId: 12,
            url: "https://a0.muscache.com/im/pictures/miso/Hosting-658867879961147273/original/c1f09c31-c066-416a-941b-c174d6fa8fa7.jpeg?im_w=720",
            preview: true
        },
        {
            spotId: 13,
            url: "https://a0.muscache.com/im/pictures/hosting/Hosting-52217377/original/5d71b1f3-819b-4273-b705-cfba132f99b9.jpeg?im_w=960",
            preview: true
        },
        {
            spotId: 13,
            url: "https://a0.muscache.com/im/pictures/a90475f7-118e-4957-8d53-ccb261f6a984.jpg?im_w=1200",
            preview: true
        },
        {
            spotId: 13,
            url: "https://a0.muscache.com/im/pictures/36235077-a702-4861-b199-21c7e3633f37.jpg?im_w=1200",
            preview: true
        },
        {
            spotId: 13,
            url: "https://a0.muscache.com/im/pictures/50aa6dae-d205-4ce2-9e55-277567990767.jpg?im_w=720",
            preview: true
        },
        {
            spotId: 13,
            url: "https://a0.muscache.com/im/pictures/5fd83291-b0f8-4afb-8d7c-416295d2a2ff.jpg?im_w=1200",
            preview: true
        },
        {
            spotId: 14,
            url: "https://a0.muscache.com/im/pictures/644bca13-9e07-4809-8ab3-ebcb7aed1f36.jpg?im_w=960",
            preview: true
        },
        {
            spotId: 14,
            url: "https://a0.muscache.com/im/pictures/0a4459d4-af44-420a-bda6-4b631f534151.jpg?im_w=720",
            preview: true
        },
        {
            spotId: 14,
            url: "https://a0.muscache.com/im/pictures/ed64336d-8be2-4f38-b4ed-238315d7f773.jpg?im_w=1200",
            preview: true
        },
        {
            spotId: 14,
            url: "https://a0.muscache.com/im/pictures/17406412-b587-4682-bfcf-cd12287582ad.jpg?im_w=720",
            preview: true
        },
        {
            spotId: 14,
            url: "https://a0.muscache.com/im/pictures/bdb690a2-b0e0-4a42-afad-5d308ff75206.jpg?im_w=1200",
            preview: true
        },
        {
            spotId: 15,
            url: "https://a0.muscache.com/im/pictures/miso/Hosting-866461098062449880/original/51536ed2-3f98-4ec0-a80f-d4ec3709b2bb.jpeg?im_w=960",
            preview: true
        },
        {
            spotId: 15,
            url: "https://a0.muscache.com/im/pictures/miso/Hosting-866461098062449880/original/f81c860d-d8c8-4eca-8523-bd7f2e62b8af.jpeg?im_w=1200",
            preview: true
        },
        {
            spotId: 15,
            url: "https://a0.muscache.com/im/pictures/miso/Hosting-866461098062449880/original/0205c2ba-e6a2-497c-87eb-ca8730c921d0.jpeg?im_w=720",
            preview: true
        },
        {
            spotId: 15,
            url: "https://a0.muscache.com/im/pictures/miso/Hosting-866461098062449880/original/0205c2ba-e6a2-497c-87eb-ca8730c921d0.jpeg?im_w=720",
            preview: true
        },
        {
            spotId: 15,
            url: "https://a0.muscache.com/im/pictures/miso/Hosting-866461098062449880/original/9102eddd-3b89-4f04-b701-8768f93636f9.jpeg?im_w=1200",
            preview: true
        },
        {
            spotId: 15,
            url: "https://a0.muscache.com/im/pictures/miso/Hosting-866461098062449880/original/2fadf55c-ef5b-4e11-8ac1-c0fe5d69bb2a.jpeg?im_w=1200",
            preview: true
        },
        {
            spotId: 16,
            url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1132650752634524552/original/190f6f50-0e91-4227-8c59-9ac7f3ce1537.jpeg?im_w=960",
            preview: true
        },
        {
            spotId: 16,
            url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1132650752634524552/original/c438fbff-d81a-4c09-8daa-93f463ee0f91.jpeg?im_w=480",
            preview: true
        },
        {
            spotId: 16,
            url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1132650752634524552/original/a97e8be0-dae6-4c9a-b0fb-dace4bbe7ffc.jpeg?im_w=480",
            preview: true
        },
        {
            spotId: 16,
            url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1132650752634524552/original/03c64933-0318-4263-9d45-78a99191edb9.jpeg?im_w=1200",
            preview: true
        },
        {
            spotId: 16,
            url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1132650752634524552/original/3d5da37f-9aa9-4fd8-bd91-0e3dbecd32a8.jpeg?im_w=720",
            preview: true
        },
        {
            spotId: 17,
            url: "https://a0.muscache.com/im/pictures/miso/Hosting-557449004853619807/original/6a3b4335-822f-4a45-8fe3-418bf9a36392.jpeg?im_w=960",
            preview: true
        },
        {
            spotId: 17,
            url: "https://a0.muscache.com/im/pictures/miso/Hosting-557449004853619807/original/2a9b4abb-c8fe-4ecf-986a-7656eeb867e5.jpeg?im_w=480",
            preview: true
        },
        {
            spotId: 17,
            url: "https://a0.muscache.com/im/pictures/miso/Hosting-557449004853619807/original/62e4409f-5b0f-4536-8fbf-f963aa2790a2.jpeg?im_w=480",
            preview: true
        },
        {
            spotId: 17,
            url: "https://a0.muscache.com/im/pictures/miso/Hosting-557449004853619807/original/f9570ad3-dff4-42a0-bddd-6ac005477fb4.jpeg?im_w=480",
            preview: true
        },
        {
            spotId: 17,
            url: "https://a0.muscache.com/im/pictures/miso/Hosting-557449004853619807/original/47d02066-973b-4b8f-b1d5-c9bbb2db4467.jpeg?im_w=1200",
            preview: true
        },
        {
            spotId: 18,
            url: "https://a0.muscache.com/im/pictures/508e285f-bd26-47e3-a33b-f2924651e627.jpg?im_w=960",
            preview: true
        },
        {
            spotId: 18,
            url: "https://a0.muscache.com/im/pictures/6086fe7e-bd57-4987-ad52-adfadfd995f7.jpg?im_w=480",
            preview: true
        },
        {
            spotId: 18,
            url: "https://a0.muscache.com/im/pictures/29f60772-f09d-4ea5-a807-a243d44237f4.jpg?im_w=480",
            preview: true
        },
        {
            spotId: 18,
            url: "https://a0.muscache.com/im/pictures/5a2958d2-74ab-4f21-ae02-fd296e233dd4.jpg?im_w=480",
            preview: true
        },
        {
            spotId: 18,
            url: "https://a0.muscache.com/im/pictures/844c5221-0a74-492e-b2ea-ee87981e3347.jpg?im_w=1200",
            preview: true
        },
        {
            spotId: 19,
            url: "https://a0.muscache.com/im/pictures/miso/Hosting-48699761/original/ac31b7fb-d5cb-4f16-8b0c-23a73095c86b.jpeg?im_w=720",
            preview: true
        },
        {
            spotId: 19,
            url: "https://a0.muscache.com/im/pictures/miso/Hosting-48699761/original/0e7ae6d0-07fe-4b00-bb1d-505b25cd1825.jpeg?im_w=720",
            preview: true
        },
        {
            spotId: 19,
            url: "https://a0.muscache.com/im/pictures/miso/Hosting-48699761/original/ecfb68e4-713e-4201-b173-b4a645cd17e0.jpeg?im_w=1200",
            preview: true
        },
        {
            spotId: 19,
            url: "https://a0.muscache.com/im/pictures/miso/Hosting-48699761/original/f7498897-4e9c-477d-836f-a7a1215ab54f.png?im_w=1200",
            preview: true
        },
        {
            spotId: 19,
            url: "https://a0.muscache.com/im/pictures/miso/Hosting-48699761/original/e1c97064-eab2-4c6a-9c02-b2d234b3fc16.jpeg?im_w=720",
            preview: true
        },
        {
            spotId: 20,
            url: "https://a0.muscache.com/im/pictures/miso/Hosting-998766210338307723/original/c6e75226-1637-43a7-90fe-b2ba2b2745c1.jpeg?im_w=720",
            preview: true
        },
        {
            spotId: 20,
            url: "https://a0.muscache.com/im/pictures/miso/Hosting-998766210338307723/original/9261c054-44be-4b00-94f6-2f665aa4a744.jpeg?im_w=1200",
            preview: true
        },
        {
            spotId: 20,
            url: "https://a0.muscache.com/im/pictures/miso/Hosting-998766210338307723/original/16cc20b8-325e-4d94-a320-7b4a0881c875.jpeg?im_w=720",
            preview: true
        },
        {
            spotId: 20,
            url: "https://a0.muscache.com/im/pictures/miso/Hosting-998766210338307723/original/a3b80fda-53ae-406d-a2b7-aa28518ca07a.jpeg?im_w=720",
            preview: true
        },
        {
            spotId: 20,
            url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-998766210338307723/original/954bb488-849f-4172-a5c1-015f52e5228d.jpeg?im_w=720",
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
