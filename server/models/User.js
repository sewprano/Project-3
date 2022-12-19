const { Schema, model } = require('mongoose');

// helper function
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

// user schema
const userSchema = new Schema({
    streamingServices: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        max_length: 25,
        min_length: 4,
      },
    email: {
        type: String,
        required: true,
        validate: [validateEmail, 'Please enter a valid email'],
    },
    password: {
        type: String,
        required: true,
        max_length: 25,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User = model('user', userSchema);

module.exports = User;