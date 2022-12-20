const { Schema, model } = require('mongoose');

// helper function
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

// user schema
const userSchema = new Schema({
    streamingServices: String,
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
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
    movies: {
        type: Schema.Types.ObjectId,
        ref: 'Movie'
    }
});

const User = model('user', userSchema);

module.exports = User;