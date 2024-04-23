const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artistController');

// Create a new artist
router.post('/artists', artistController.createArtist);

// Get all artists
router.get('/artists', artistController.getAllArtists);

// Get artist by ID
router.get('/artists/:id', artistController.getArtistById);

// Update an artist
router.put('/artists/:id', artistController.updateArtist);

// Delete an artist
router.delete('/artists/:id', artistController.deleteArtist);

module.exports = router;
