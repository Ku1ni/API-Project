const express = require('express');
const {requireAuth} = require('../../utils/auth');
const { Review, ReviewImage, Spot, SpotImages } = require('../../db/models');
const router = express.Router();

router.delete('/spot-images/:imageId', requireAuth, async (req, res) => {
    const ownerId = req.user.id
    const imageId = req.params.imageId;
    const spotImage = await SpotImages.findByPk(imageId, {
        include: Spot
    });


    if (!spotImage) {
        return res.status(404).json({ message: "Spot Image couldn't be found" });
    }

    const owner = spotImage.Spot.ownerId

    if (owner !== ownerId) {
        return res.status(403).json({ message: "You are not authorized to delete this spot image" });
    }

    await spotImage.destroy();

    return res.json({ message: "Successfully deleted" });
});



router.delete('/review-images/:imageId', requireAuth, async (req, res) => {
    const imageId = req.params.imageId;

    const reviewImage = await ReviewImage.findByPk(imageId);
    if (!reviewImage) {
        return res.status(404).json({ message: "Review Image couldn't be found" });
    }

    const review = await Review.findByPk(reviewImage.reviewId);

    if (review.userId !== req.user.id) {
        return res.status(403).json({ message: "You are not authorized to delete this review image" });
    }

    await reviewImage.destroy();

    return res.json({ message: "Successfully deleted" });
});


module.exports = router;
