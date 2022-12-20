// const { Schema, model } = require('mongoose');
// const User = require('./User');

// // every profile will have a user
// // will also have a favorite movie poster
// // have user summary

// const profileSchema = new Schema({
//     user: {
//         type: Schema.Types.ObjectId,
//         ref: 'User',
//     },
//     summary: {
//         type: String,
//         max_length: 300,
//     },
//     favoriteMovie: {
//         type: Schema.Types.ObjectId,
//         ref: 'Movie',
//     }
// });

// const Profile = model('profile', profileSchema);

// module.exports = Profile;