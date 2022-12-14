const { Schema, model } = require('mongoose');
const User = require('./User');

const profileSchema = new Schema({
    
    user: [User],
});

const Profile = model('profile', profileSchema);

module.exports = Profile;