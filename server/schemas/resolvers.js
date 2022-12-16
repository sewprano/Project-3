const { Movie, User, Profile } = require('../models');

const resolvers = {
    Query: {
        movie: async () => {
            return Movie.find({})
        }
    },
    Mutation: {

    },
}




module.exports = resolvers;