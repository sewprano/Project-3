const { Schema, model } = require('mongoose');

//change structure for user fav movies

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    director: {
        type: String,
    },
    year: {
        type: Integer,
        requried: true,
    },
});

const Movie = model('movie', movieSchema)

module.exports = Movie;