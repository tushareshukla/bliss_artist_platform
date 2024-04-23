const Artist = require('../models/Artist');

// Create a new artist
exports.createArtist = async (req, res, next) => {
    try {
        const { name, email, services } = req.body;
        const artist = await Artist.create({ name, email, services });
        res.status(201).json(artist);
    } catch (error) {
        next(error);
    }
};

// Get all artists
exports.getAllArtists = async (req, res, next) => {
    try {
        const artists = await Artist.find();
        res.status(200).json(artists);
    } catch (error) {
        next(error);
    }
};

// Get artist by ID
exports.getArtistById = async (req, res, next) => {
    try {
        const artist = await Artist.findById(req.params.id);
        if (!artist) {
            return res.status(404).json({ message: 'Artist not found' });
        }
        res.status(200).json(artist);
    } catch (error) {
        next(error);
    }
};

// Update an artist
exports.updateArtist = async (req, res, next) => {
    try {
        const { name, email, services } = req.body;
        const artist = await Artist.findByIdAndUpdate(req.params.id, { name, email, services }, { new: true });
        if (!artist) {
            return res.status(404).json({ message: 'Artist not found' });
        }
        res.status(200).json(artist);
    } catch (error) {
        next(error);
    }
};

// Delete an artist
exports.deleteArtist = async (req, res, next) => {
    try {
        const artist = await Artist.findByIdAndDelete(req.params.id);
        if (!artist) {
            return res.status(404).json({ message: 'Artist not found' });
        }
        res.status(204).json();
    } catch (error) {
        next(error);
    }
};
