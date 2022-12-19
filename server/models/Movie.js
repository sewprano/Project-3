const { Schema, model } = require('mongoose');

//change structure for user fav movies

const movieSchema = new Schema({
    title: String,
    director: String,
    year: Number,
});

const Movie = model('movie', movieSchema)

module.exports = Movie;