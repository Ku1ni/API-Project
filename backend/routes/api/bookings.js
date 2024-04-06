const express = require('express');
const {requireAuth} = require('../../utils/auth');
const { dateFormat } = require('../../utils/date');
const { User, Spot, Booking } = require('../../db/models');
const { Op } = require('sequelize');
const router = express.Router();




// Get all of the Current User's Bookings
router.get('/bookings/current', requireAuth, async (req, res) =>{
    const userId = req.user.id;
    const userBookings = await Booking.findAll({
        where: {
            userId: userId
        },
        include: Spot
    })

    const bookingResponse = userBookings.map(booking => ({
        id: booking.id,
        spotId: booking.spotId,
        Spot: {
            id: booking.Spot.id,
            ownerId: booking.Spot.ownerId,
            address: booking.Spot.address,
            city: booking.Spot.city,
            state: booking.Spot.state,
            country: booking.Spot.country,
            lat: booking.Spot.lat,
            lng: booking.Spot.lng,
            name: booking.Spot.name,
            price: booking.Spot.price,
            previewImage: booking.Spot.previewImage
        },
        userId: booking.userId,
        startDate: dateFormat(booking.startDate),
        endDate: dateFormat(booking.endDate),
        createdAt: dateFormat(booking.createdAt),
        updatedAt: dateFormat(booking.createdAt)
    }))
    return res.json({
        Bookings: bookingResponse
    })
});



// Get all Bookings for a Spot based on the Spot's id
router.get('/spots/:spotId/bookings', requireAuth, async (req, res) => {
    const spotId = req.params.spotId;
    const spot = await Spot.findByPk(spotId);
    if(!spot){
        return res.status(404).json({ message: "Spot couldn't be found" });
    }

    const spotBookings = await Booking.findAll({
        where: { spotId },
        include: {
            model: User,
            attributes: ['id', 'firstName', 'lastName']
        }
    });
    const isOwner = spot.ownerId === req.user.id;

    if(isOwner){
        return res.json({ Bookings: spotBookings });
    } else {
        const simplifiedBookings = spotBookings.map(booking => ({
            spotId: booking.spotId,
            startDate: dateFormat(booking.startDate),
            endDate: dateFormat(booking.endDate)
        }));
        return res.status(200).json({ Bookings: simplifiedBookings });
    }
});



// Create a Booking from a Spot based on the Spot's id
router.post('/spots/:spotId/bookings', requireAuth, async (req, res) => {
    const spotId = req.params.spotId;
    const { startDate, endDate } = req.body;

    const spot = await Spot.findByPk(spotId);
    if (!spot) {
        return res.status(404).json({ message: "Spot couldn't be found" });
    }

    if (startDate === endDate) {
        return res.status(403).json({ message: "Start date and end date cannot be the same" });
    }

    if (new Date(startDate) > new Date(endDate)) {
        return res.status(403).json({ message: "End date cannot be before the start date" });
    }

    if (new Date(startDate) < new Date() || new Date(endDate) < new Date()) {
        return res.status(403).json({ message: "Booking dates cannot be in the past" });
    }

    if (spot.ownerId !== req.user.id){
        return res.status(403).json({ message: "You are not authorized to book your own spot" });
    }

    const existingBooking = await Booking.findOne({
        where: {
            spotId,
            [Op.or]: [
                {
                    [Op.and]: [
                        { startDate: { [Op.lt]: endDate } },
                        { endDate: { [Op.gt]: startDate } }
                    ]
                },
                {
                    [Op.and]: [
                        { startDate: { [Op.lte]: startDate } },
                        { endDate: { [Op.gte]: endDate } }
                    ]
                }
            ]
        }
    });

    if (existingBooking) {
        return res.status(403).json({ message: "Sorry, this spot is already booked for the specified dates", errors: {
            startDate: "Start date conflicts with an existing booking",
            endDate: "End date conflicts with an existing booking"
        } });
    }

    const newBooking = await Booking.create({
        spotId,
        userId: req.user.id,
        startDate,
        endDate
    });

    const cleanBooking = {
        ...newBooking.toJSON(),
        startDate: dateFormat(newBooking.startDate),
        endDate: dateFormat(newBooking.endDate),
        createdAt: dateFormat(newBooking.createdAt),
        updatedAt: dateFormat(newBooking.updatedAt)
    }

    return res.json(cleanBooking);
});



//Edit a Booking
router.put('/bookings/:bookingId', requireAuth, async (req, res) => {
        const { user } = req;
        const { bookingId } = req.params;
        const { endDate, startDate } = req.body;
        const date = new Date();

        const booking = await Booking.findOne({ where: { id: bookingId } });

        if (!booking) {
          return res.status(404).json({ message: "Booking couldn't be found" });
        }

        if (startDate === endDate) {
        return res.status(403).json({ message: "Start date and end date cannot be the same" });
        }

        if (user.id !== booking.userId) {
          return res.status(403).json({ message: "Forbidden" });
        }

        if (new Date(startDate) < date || new Date(endDate) < date) {
          return res.status(403).json({ message: "Past bookings can't be modified" });
        }

        const existingBooking = await Booking.findOne({
          where: {
            id: {
                [Op.ne]: bookingId
            },
            spotId: booking.spotId,
            startDate: {
                [Op.lte]: new Date(endDate)
            },
            endDate: {
                [Op.gte]: new Date(startDate)
            },
          },
        });


        if (existingBooking) {
          return res.status(403).json({
            message: "Sorry, this spot is already booked for the specified dates", errors: {
              startDate: "Start date conflicts with an existing booking",
              endDate: "End date conflicts with an existing booking",
            },
          });
        }

        if (startDate) booking.startDate = startDate;
        if (endDate) booking.endDate = endDate;


        booking.startDate = dateFormat(booking.startDate);
        booking.endDate = dateFormat(booking.endDate);

        await booking.save();
        return res.json(booking);
    }
  );


// Delete a Booking
router.delete("/bookings/:bookingId", requireAuth, async (req, res) => {
    const { bookingId } = req.params;

    const booking = await Booking.findByPk(bookingId);

    if (!booking) {
        return res.status(404).json({
            message: "Booking couldn't be found"
        })
    }
     if (new Date(booking.startDate) <= new Date()) {
       return res.status(403).json({ message: "Bookings that have been started can't be deleted" });
     }
    if (booking.userId !== req.user.id) {
        const spot = await Spot.findByPk(booking.spotId);
        if (!spot || spot.ownerId !== req.user.id) {
          return res.status(403).json({ message: "Forbidden" });
        }
    }
    await booking.destroy();

    return res.status(200).json({ message: "Successfully deleted" });
})

module.exports = router;
