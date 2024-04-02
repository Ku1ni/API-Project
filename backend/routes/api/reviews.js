const express = require('express');
const { handleValidationErrors } = require('../../utils/validation');
const { check, query, validationResult } = require('express-validator');
const {requireAuth} = require('../../utils/auth')
const { Review, ReviewImage, User, Spot, SpotImages } = require('../../db/models');
const router = express.Router();

router.get('/reviews/current', async (req, res) => {
    const userId = req.user.id;

    const reviews = await Review.findAll({
        where: {userId: userId},
        include: [
            { model: User, attributes: ['id', 'firstName', 'lastName'] },
            {
                model: Spot,
                attributes: ['id', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'price' ],
                include: { model: SpotImages, as: 'previewImage', attributes: ['preview'] }
            },
            { model: ReviewImage, attributes: ['id', 'url'] }
        ]
    })
    return res.json({reviews})
})

module.exports = router;
