const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        # streamServices: [Stream] 
    }

    # type Movie {
    #     title: String
    #     director: String
    # }

    type Auth {
        token: ID!
        user: User
    }
    
    # type Stream {
    #     name: String
    #     renewalPrice: Int
    #     renewalDate: Int
    # },

    # input StreamInput {
    #     name: String
    # }

    # type Profile {
    #     _id: ID
    #     user: User
    #     summary: String
    #     favoriteMovie: [Movie]
    # }

    #Queries
    type Query {
        users: [User]
        user(ID: ID!): User
        # movies: [Movie]
        # streamingServices: [Stream]
    }

    type Mutation {
        login(email: String!, password: String!) : Auth
        newUser(username: String!, email: String!, password: String!) : User
        deleteUser(ID: ID!, username: String!, email: String!, password: String!): User
        # addMovie(title: String!, director: String!): Movie
        # deleteMovie(ID: ID!, title: String!, director: String!): Movie
        # createMovie(title: String!): Movie!
        # editMovie(ID: ID!,movieInput: MovieInput): Boolean
        # maybe an add profile here
    }
`;

module.exports = typeDefs;
