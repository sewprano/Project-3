const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        profile: Profile!
        streamServices: [Stream!] 
    }

    type Profile {
        _id: ID!
        favoriteMovie: [Movie!]
    }

    type Movie {
        title: String!
        director: String
        year: Int
    }

    type Stream {
        name: String!
        renewalPrice: Int!
        renewalDate: Date!
    },

    type Query {
        user: User!
        profile: Profile!
        movie: [Movie!]
        streamingServices: [Stream!]
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!) : User!
        deleteUser(id: ID!): User!
        createMovie(title: String!): Movie!
        addStreamService(name: String!, renewalPrice: Int!, renewalDate: Date!)
        # maybe an add profile here
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
