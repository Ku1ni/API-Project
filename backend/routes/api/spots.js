const express = require('express');
// const { handleValidationErrors } = require('../../utils/validation');
// const { check, query, validationResult } = require('express-validator');
const {requireAuth} = require('../../utils/auth');
const { Spot, SpotImages } = require('../../db/models');

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

  router.get('/',  async (req, res) => {
    let spots = await Spot.findAll()
      return res.json(spots)

  });



  router.get('/current', requireAuth, async (req, res) => {
    let userId = req.user.id;
    console.log(userId)
    let spots = await Spot.findAll({
      where: {
        ownerId: userId
      },
      include: 'previewImage'

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

  router.get('/:spotId', requireAuth, async (req, res) => {
    const spot = await Spot.findByPk(req.params.spotId,{
      include: 'previewImage'
    });
    // const rating = avgRating;
    if(spot) {
      const response = {
        ...spot.dataValues,
        // rating,
        previewImage: spot.previewImage ? spot.previewImage.url : null
      }
      return res.json(spot)
    }else {
      return res.status(404).json({message: "Spot couldn't be found"})
    }
  })
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
    return res.json(newSpot)
  });

  router.post('/:spotId/images', requireAuth, async (req, res) => {
    const {url} = req.body;

    const spot = await SpotImages.findByPk(req.params.spotId);
    if(spot){
      const newImage = await SpotImages.create({
            url: url,
            spotId: spot.id,
            preview: true
          })
          res.json(newImage)
    }else{
    return res.status(404).json({message: "Spot couldn't be found"})
    }
  })

  router.put('/:spotId', requireAuth, validateSpotCreation, async (req, res) => {
    const { address, city, state, country, lat, lng, name, description, price } = req.body;
    const spotId = req.params.spotId;
    const userId = req.user.id;

    const spot = await Spot.findByPk(spotId);
    if(!spot || spot.ownerId !== userId){
      return res.status(404).json({message: "Spot couldn't be found"})
    }
    await spot.update({ address, city, state, country, lat, lng, name, description, price });
    return res.json(spot)
  });


  router.delete('/:spotId', requireAuth, async (req, res) => {
    const spotId = req.params.spotId;
    const userId = req.user.id;
    const spot = await Spot.findByPk(spotId);
    if(!spot || spot.ownerId !== userId){
      return res.status(404).json({ message: 'Spot could not be found' });

    }

    await spot.destroy();
    return res.json({ message: 'Successfully deleted' });
  })


module.exports = router;
