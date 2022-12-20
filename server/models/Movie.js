const { Schema, model } = require('mongoose');

//change structure for user fav movies

const movieSchema = new Schema({
    title: String,
    director: String,
});

const Movie = model('movie', movieSchema)

module.exports = Movie;