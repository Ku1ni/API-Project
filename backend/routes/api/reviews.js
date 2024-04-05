const express = require('express');
const {requireAuth} = require('../../utils/auth');
const { dateFormat } = require('../../utils/date');
const { Review, ReviewImage, User, Spot, SpotImages } = require('../../db/models');
const router = express.Router();


// Get all Reviews of the Current User
router.get('/reviews/current', async (req, res) => {
    const userId = req.user.id;

    const reviews = await Review.findAll({
        where: { userId: userId },
        include: [
            {
                model: User,
                attributes: ['id', 'firstName', 'lastName']
            },
            {
                model: Spot,
                attributes: ['id', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'price'],
                include: { model: SpotImages, as: 'previewImage', attributes: ['preview'] }
            },
            { model: ReviewImage, attributes: ['id', 'url'] }
        ]
    });

    const response = reviews.map(review => ({
        ...review.dataValues,
        createdAt: dateFormat(review.createdAt),
        updatedAt: dateFormat(review.updatedAt)
    }));

    return res.json(response);
});



// Get all Reviews by a Spot's id
// router.get('/spots/:spotId/reviews', async (req, res) => {
//     const spotId = req.params.spotId;
//     const reviews = await Review.findAll({
//         where: {spotId: spotId},
//         include: [
//             { model: User, attributes: ['id', 'firstName', 'lastName'] },
//             { model: ReviewImage, attributes: ['id', 'url'] }
//         ]
//     });
//     if (reviews.length === 0){
//         return res.status(404).json({ message: "Spot couldn't be found" });
//     }
//     const response = reviews.map(review => ({
//         ...reviews.dataValues,
//         createdAt: dateFormat(reviews.createdAt),
//         updatedAt: dateFormat(review.updatedAt)
//     }));

//     return res.json({ Reviews: reviews})
// });
router.get('/spots/:spotId/reviews', async (req, res) => {
    const spotId = req.params.spotId;
    const reviews = await Review.findAll({
        where: { spotId: spotId },
        include: [
            { model: User, attributes: ['id', 'firstName', 'lastName'] },
            { model: ReviewImage, attributes: ['id', 'url'] }
        ]
    });

    if (reviews.length === 0) {
        return res.status(404).json({ message: "Spot couldn't be found" });
    }

    const response = reviews.map(review => ({
        ...review.dataValues,
        createdAt: dateFormat(review.createdAt),
        updatedAt: dateFormat(review.updatedAt)
    }));

    return res.json(response);
});



// Create a Review for a Spot based on the Spot's id
router.post('/spots/:spotId/reviews',requireAuth, async (req, res) => {
    const spotId = req.params.spotId;
    const { review, stars } = req.body;
    const userId = req.user.id
    if(!userId){
      return res.status(404).json({message: "Forbidden"})
    }
    const spot = await Spot.findByPk(spotId);
    if (!spot) {
        return res.json({ message:"Spot couldn't be found"});
    }
    const pastReview = await Review.findOne({
        where: {
            userId,
            spotId
        }
    });
    if(pastReview) {
        return res.json({ message: "User already has a review for this spot"})
    }

    const newReview = await Review.create({
        userId,
        spotId,
        review,
        stars,

    });

    const response = {
        ...newReview.dataValues,
        createdAt: dateFormat(newReview.createdAt),
        updatedAt: dateFormat(newReview.updatedAt)
    };
    return res.status(201).json(response)
});



// Add an Image to a Review based on the Review's id
router.post('/reviews/:reviewId/images', requireAuth, async (req, res) => {
    const reviewId = req.params.reviewId;
    const { url } = req.body;
    const userId = req.user.id;


    const review = await Review.findByPk(reviewId, {
        include: User
    });

    if(!review){
        return res.status(404).json({ message: "Review couldn't be found" });
    }

    const user = review.User;

    if (user.id !== userId) {
        return res.status(403).json({ message: "Unauthorized: Review does not belong to the current user" });
    }

    const pastImages = await ReviewImage.findAll ({
        where: {
            reviewId
        }
    })

    if(pastImages.length >= 10){
        return res.status(403).json({ message: "Maximum number of images for this review was reached" })
    }

    const newImage = await ReviewImage.create({
        url,
        reviewId
    })

    const response = {
        ...newImage.dataValues,
        createdAt: dateFormat(newImage.createdAt),
        updatedAt: dateFormat(newImage.updatedAt)
    };

    return res.json(response)

});



// Edit a Review
router.put('/reviews/:reviewId', requireAuth, async (req, res) =>{
    const userId = req.user.id;
    const reviewId = req.params.reviewId;
    const { review, stars } = req.body;

    const pastReview = await Review.findByPk(reviewId, {
        include: User
    });

    if(!pastReview){
        return res.status(404).json({ message: "Review couldn't be found" })
    }

    const user = pastReview.User;
    if(!user) {
        return res.status(403).json({ message: "Unauthorized: Review does not belong to the current user"});
    }
    if(user.id !== userId){
        return res.status(403).json({ message: "Unauthorized: Review does not belong to the current user" })
    }

    pastReview.review = review;
    pastReview.stars = stars;
    await pastReview.save();

    return res.status(200).json({
        id: pastReview.id,
        userId: pastReview.userId,
        spotId: pastReview.spotId,
        review: pastReview.review,
        stars: pastReview.stars,
        user: pastReview.User,
        createdAt: dateFormat(pastReview.createdAt),
        updatedAt: dateFormat(pastReview.updatedAt)
    });

});




// Delete a Review
router.delete('/reviews/:reviewId', requireAuth, async(req, res) => {
    const userId = req.user.id;
    const reviewId = req.params.reviewId;

    const review = await Review.findByPk(reviewId, {
        include: User
    })
    if(!review){
        return res.status(404).json({ message: "Review couldn't be found" });
    }

    const user = review.User;

    if (user.id !== userId) {
        return res.status(403).json({ message: "Unauthorized: Review does not belong to the current user" });
    }

    await Review.destroy({
        where: {
            id: reviewId
        }
    });
    return res.json({message: "Successfully deleted"})
})


module.exports = router;
