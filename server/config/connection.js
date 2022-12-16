const mongoose = require('mongoose');

// process.env.MONGODB_URI || 
mongoose.connect('mongodb://127.0.0.1:27017/moviesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = mongoose.connection;