const { Movie, User, Profile } = require('../models');

const resolvers = {
    Query: {
        user: async () => {
            return User.find({})
        },
        Movie: async () => {
            return Movie
        }
    },
    Mutation: {

    },
}




module.exports = resolvers;