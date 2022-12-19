const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        profile: Profile!
        streamServices: [Stream]! 
    }

    type Profile {
        _id: ID!
        user: User!
        favoriteMovie: [Movie]!
    }

    type Movie {
        title: String!
        director: String
        year: Int
    }

    type Stream {
        name: String!
        renewelPrice: Int!
        renewlDate: Date!
    },

    type Query {
        user: User!
        profile: Profile!
        movie: [Movie]!
        streamingServices: [Stream]!
    }

    type Mutation {
        createUser(first: String!, last: String!, username: String!, email: String!, password: String!, profile:)
    }
`;

module.exports = typeDefs;

// would need corresponding models
// signUpInput {
//   email:String!
//   username: String!
//   password: String!
// }

// searchInput {
//     search: String!
// }
