const { AuthenticationError } = require('apollo-server-express');
const { Movie, User, } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async () => {
            return User.find()
        },
        // Movie: async () => {
        //     return Movie.
        // }
    },
    Mutation: {
        newUser: async(parent, { username, email, password }) => {
          const user = await User.create({ username, email, password })
          const token = signToken(user);
          return { token, user } 
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError("The email entered does not match our records");
            }
            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
              throw new AuthenticationError("Incorrect password");
            }
      
            const token = signToken(user);
            return { token, user };
        },
        deleteUser: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
        if (!user) {
          throw new AuthenticationError("The email you entered did not match our records.");
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError("Incorrect password");
        }
  
        console.log("This user has been deleted");
        return user.delete();
      },
//       addMovie: async(parent, {title, director}) => {
//         const movie = await Movie.create({title, director})
//       }
    }
}




module.exports = resolvers;