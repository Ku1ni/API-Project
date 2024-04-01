const express = require('express');
const { handleValidationErrors } = require('../../utils/validation');
const { check, query, validationResult } = require('express-validator');
const {requireAuth} = require('../../utils/auth')
const { Spot } = require('../../db/models');
const router = express.Router();

const dateFormat = (date) =>{
  const d = new Date(date);
  const month = d.getMonth();
  const day = d.getDay();
  const year = d.getYear();
  const hours = d.getHours();
  const mins = d.getMinutes();
  const seconds = d.getSeconds();
  return `${month}/${day}/${year} ${hours}:${mins}:${seconds}`
}
const validateSpotCreation = (req, res, next) => {
  let { address, city, state, country, lat, lng, name, description, price } = req.body;
  if (!address || !city || !state || !country || !lat || !lng || !name || !description || !price || price < 0 || lat < -90 || lat > 90 || lng < -180 || lng > 180 || name > 50) {
      return res.status(400).json({
        message: "Bad Request",
        errors: {
          "address": "Street address is required",
          "city": "City is required",
          "state": "State is required",
          "country": "Country is required",
          "lat": "Latitude must be within -90 and 90",
          "lng": "Longitude must be within -180 and 180",
          "name": "Name must be less than 50 characters",
          "description": "Description is required",
          "price": "Price per day must be a positive number"
        }
      })
    }
    next();
}
//  [
  // check('address')
  //   .exists({ checkFalsy: true })
  //   .withMessage('Address is required'),
  // check('city')
  //   .exists({ checkFalsy: true })
  //   .withMessage('City is required'),
  // check('state')
  //   .exists({ checkFalsy: true })
  //   .withMessage('State is required'),
  // check('country')
  //   .exists({ checkFalsy: true })
  //   .withMessage('Country is required'),
  // check('lat')
  //   .exists({ checkFalsy: true })
  //   .withMessage('Latitude is required'),
  // check('lng')
  //   .exists({ checkFalsy: true })
  //   .withMessage('Longitude is required'),
  // check('name')
  //   .exists({ checkFalsy: true })
  //   .withMessage('Name is required'),
  // check('description')
  //   .exists({ checkFalsy: true })
  //   .withMessage('Description is required'),
  // check('price')
  //   .exists({ checkFalsy: true })
  //   .withMessage('Price is required'),
  // handleValidationErrors
// ];

  // router.get('/spots', )

  router.get('/current', requireAuth, async (req, res) => {
    let userId = req.user.id;
    let spots = await Spot.findAll({
      where: {
        ownerId: userId
      },

    })

      let newSpots = spots.map((spot) => {
        return {
          id: spot.id,
          ownerId: spot.ownerId,
          address: spot.address,
          city: spot.city,
          state: spot.state,
          country: spot.country,
          lat: spot.lat,
          lng: spot.lng,
          name: spot.name,
          description: spot.description,
          price: spot.price,
          createdAt: dateFormat(spot.createdAt),
          updatedAt: dateFormat(spot.updatedAt),
          avgRating: +spot.avgRating || 0,
          previewImage: spot.previewImage ? spot.previewImage.url : null
        }
      })

    res.status(200).json({Spots: newSpots})
  });

  router.post('/', requireAuth, validateSpotCreation, async (req, res) => {
    const { address, city, state, country, lat, lng, name, description, price } = req.body;

    const newSpot = await Spot.create({
      ownerId: req.user.id,
      address,
      city,
      state,
      country,
      lat,
      lng,
      name,
      description,
      price
    });


    // const safeSpot = {
    //   id: newSpot.id,
    //   address: newSpot.address,
    //   city: newSpot.city,
    //   state: newSpot.state,
    //   country: newSpot.country,
    //   lat: newSpot.lat,
    //   lng: newSpot.lng,
    //   name: newSpot.name,
    //   description: newSpot.description,
    //   price: newSpot.price
    // };
    return res.json(newSpot)
  })



module.exports = router;
