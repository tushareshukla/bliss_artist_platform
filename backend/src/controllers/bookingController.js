const Booking = require('../models/Booking');

// Create a new booking
exports.createBooking = async (req, res, next) => {
    try {
        const { userId, artistId, date } = req.body;
        const booking = await Booking.create({ userId, artistId, date });
        res.status(201).json(booking);
    } catch (error) {
        next(error);
    }
};

// Get all bookings
exports.getAllBookings = async (req, res, next) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        next(error);
    }
};

// Get booking by ID
exports.getBookingById = async (req, res, next) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json(booking);
    } catch (error) {
        next(error);
    }
};

// Update a booking
exports.updateBooking = async (req, res, next) => {
    try {
        const { userId, artistId, date } = req.body;
        const booking = await Booking.findByIdAndUpdate(req.params.id, { userId, artistId, date }, { new: true });
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json(booking);
    } catch (error) {
        next(error);
    }
};

// Delete a booking
exports.deleteBooking = async (req, res, next) => {
    try {
        const booking = await Booking.findByIdAndDelete(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(204).json();
    } catch (error) {
        next(error);
    }
};
