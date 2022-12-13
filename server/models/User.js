const { Schema } = require('mongoose');

// helper function
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

// user schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        max_length: 25,
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
        type: date,
        default: Date.now,
    },
});

module.exports = userSchema;