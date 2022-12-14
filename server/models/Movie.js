const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    year: {
        type: Integer,
        requried: true,
    },
    runtime: {
        type: Integer,
        required: true,
    },
    streamService: {
        type: String,
        required: true,
    },
});

const Movie = model('movie', movieSchema)

module.exports = Movie;