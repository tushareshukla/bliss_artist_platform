const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Create a new booking
router.post('/bookings', bookingController.createBooking);

// Get all bookings
router.get('/bookings', bookingController.getAllBookings);

// Get booking by ID
router.get('/bookings/:id', bookingController.getBookingById);

// Update a booking
router.put('/bookings/:id', bookingController.updateBooking);

// Delete a booking
router.delete('/bookings/:id', bookingController.deleteBooking);

module.exports = router;
