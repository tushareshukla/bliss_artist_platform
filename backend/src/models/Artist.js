const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    services: [String], // Example array of services provided by the artist
    // Add other fields as needed
}, { timestamps: true });

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;
