const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        first: String!
        last: String!
        username: String!
        email: String!
        password: String!
    }

    type Profile {
        _id: ID!
        user: *REFERENCE MODEL SOMEHOW*
        favoriteMovie: *REFERENCE MODEL SOMEHOW*
    }

    type Movie {
        title: String!
        director: String
        year: Int
    }

    type Query {

    }

    type Mutation {
        
    }
`;

module.exports = typeDefs;

// 'createdAt: ' not sure how to reference date here for User 