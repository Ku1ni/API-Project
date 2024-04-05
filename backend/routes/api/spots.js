const express = require('express');
const {requireAuth} = require('../../utils/auth');
const { dateFormat } = require('../../utils/date');
const { handleValidationErrors } = require('../../utils/validation');
const { Spot, SpotImages, Review } = require('../../db/models');
const router = express.Router();



//Middleware
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


// Get All Spots
router.get("/", async (req, res) => {
  let { page, size, minLat, maxLat, minLng, maxLng, minPrice, maxPrice } = req.query;

  page = parseInt(page) || 1;
  size = parseInt(size) || 20;
  page = Math.min(page, 10);
  size = Math.min(size, 20);

  let pagObj = {
    limit: size,
    offset: size * (page - 1),
  };

  let searchObj = {
    where: {}
  };

  const errors = {};
  if (page < 1) {
      errors.page = "Page must be greater than or equal to 1";
  }
  if (size < 1) {
      errors.size = "Size must be greater than or equal to 1";
  }
  if (minLat < -90 || minLat > 90) {
      errors.minLat = "Minimum latitude is invalid";
  }
  if (maxLat < -90 || maxLat > 90) {
      errors.maxLat = "Maximum latitude is invalid";
  }
  if (minLng < -180 || minLng > 180) {
      errors.minLng = "Minimum longitude is invalid";
  }
  if (maxLng < -180 || maxLng > 180) {
      errors.maxLng = "Maximum longitude is invalid";
  }
  if (minPrice < 0) {
      errors.minPrice = "Minimum price must be greater than or equal to 0";
  }
  if (maxPrice < 0) {
      errors.maxPrice = "Maximum price must be greater than or equal to 0";
  }

  if (Object.keys(errors).length > 0) {
      return res.status(400).json({
          message: "Bad Request",
          errors: errors
      });
  }

  const filterCriteria = {};
  if (minLat && maxLat) {
      filterCriteria.lat = { [Sequelize.Op.gte]: minLat, [Sequelize.Op.lte]: maxLat };
  }
  if (minLng && maxLng) {
      filterCriteria.lng = { [Sequelize.Op.gte]: minLng, [Sequelize.Op.lte]: maxLng };
  }
  if (minPrice !== undefined && maxPrice !== undefined) {
      filterCriteria.price = {
          [Sequelize.Op.gte]: minPrice,
          [Sequelize.Op.lte]: maxPrice
      };
  } else {
      if (minPrice !== undefined) {
          filterCriteria.price = { [Sequelize.Op.gte]: minPrice };
      }
      if (maxPrice !== undefined) {
          filterCriteria.price = { ...filterCriteria.price, [Sequelize.Op.lte]: maxPrice };
      }
  }

  let spots = await Spot.findAll({
    ...pagObj,
    ...searchObj
  });

  for (let i = 0; i < spots.length; i++) {
    let spot = spots[i];
    let sum = 0;
    let reviews = await Review.findAll({
      where: { spotId: spot.id }
    });
    for (let j = 0; j < reviews.length; j++) {
      sum += reviews[j].stars;
    }
    let average = reviews.length > 0 ? sum / reviews.length : 0;

    spot.avgRating = average;

    let previewImage = await SpotImages.findOne({
      where: { spotId: spot.id, preview: true },
      attributes: ["url"]
    });

    spot.previewImage = previewImage ? previewImage.url : null;
  }

  let fixed = spots.map((spot) => ({
    id: spot.id,
    ownerId: spot.ownerId,
    address: spot.address,
    city: spot.city,
    state: spot.state,
    country: spot.country,
    lat: +spot.lat,
    lng: +spot.lng,
    name: spot.name,
    description: spot.description,
    price: +spot.price,
    createdAt: dateFormat(spot.createdAt),
    updatedAt: dateFormat(spot.updatedAt),
    avgRating: spot.avgRating || 0,
    previewImage: spot.previewImage
  }));

  let response = { Spots: fixed };
  if (req.query.size) {
    response.page = +page;
    response.size = +size;
  }

  res.status(200).json(response);
});

// Get all Spots owned by the Current User
  router.get('/current', requireAuth, async (req, res) => {
    let userId = req.user.id;

    let spots = await Spot.findAll({
      where: {
        ownerId: userId
      },
      include: 'previewImage'

    });



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
          avgRating: spot.avgRating || 0,
          previewImage: spot.previewImage ? spot.previewImage.url : null
        }
      })

    res.status(200).json({Spots: newSpots})
  });



// Get details of a Spot from an id
  router.get('/:spotId', requireAuth, async (req, res) => {
    const spot = await Spot.findByPk(req.params.spotId,{
      include: 'previewImage'
    });


    if(spot) {
      const response = {
        ...spot.dataValues,
        createdAt: dateFormat(spot.createdAt),
        updatedAt: dateFormat(spot.updatedAt),
        previewImage: spot.previewImage ? spot.previewImage.url : null
      }
      return res.json(response)
    }else {
      return res.status(404).json({message: "Spot couldn't be found"})
    }
  });



// Create a Spot
  router.post('/', requireAuth, validateSpotCreation, async (req, res) => {
    const { address, city, state, country, lat, lng, name, description, price } = req.body;
    userId = req.user.id

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

    const response = {
      ...newSpot.dataValues,
      createdAt: dateFormat(newSpot.createdAt),
      updatedAt: dateFormat(newSpot.updatedAt)
    }
    return res.json(response)
  });




// Add an Image to a Spot based on the Spot's id
  router.post('/:spotId/images', requireAuth, async (req, res) => {
    const {url} = req.body;
    const spotId = req.params.spotId;
    const userId = req.user.id;

    const spot = await Spot.findByPk(spotId);

    if (!spot){
      return res.status(404).json({ "message": "Spot couldn't be found" });
    }
    if (spot.ownerId !== userId){
      return res.status(403).json({ message: 'Forbidden' });
    }

      const newImage = await SpotImages.create({
        url: url,
        spotId: spot.id,
        preview: true
      });

      const response = {
        id: newImage.id,
        url: newImage.url,
        preview: newImage.preview
      }
      res.json(response)

  })


// Edit a Spot
  router.put('/:spotId', requireAuth, validateSpotCreation, async (req, res) => {
    const { address, city, state, country, lat, lng, name, description, price } = req.body;
    const spotId = req.params.spotId;
    const userId = req.user.id;

    const spot = await Spot.findByPk(spotId);
    if(!spot){
      return res.status(404).json({message: "Spot couldn't be found"})
    }
    if(spot.ownerId !== userId){
      return res.status(403).json({ message: 'Forbidden' })
    }
    await spot.update({ address, city, state, country, lat, lng, name, description, price });
    const response = {
      ...spot.dataValues,
      createdAt: dateFormat(spot.createdAt),
      updatedAt: dateFormat(spot.updatedAt)
    }
    return res.json(response)
  });



// Delete a Spot
  router.delete('/:spotId', requireAuth, async (req, res) => {
    const spotId = req.params.spotId;
    const spot = await Spot.findByPk(spotId);
    const userId = req.user.id;

    if(!spot){
      return res.status(404).json({ message: 'Spot could not be found' });
    }
    if(spot.ownerId !== userId){
      return res.status(403).json({ message: 'Forbidden' });
    }

    await spot.destroy();
    return res.json({ message: 'Successfully deleted' });
  })


module.exports = router;
