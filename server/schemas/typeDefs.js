const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        streamServices: [Stream] 
    }

    input UserInput {
        username: String
        email: String
        password: String
    }

    type Profile {
        _id: ID
        user: User
        summary: String
        favoriteMovie: [Movie]
    }

    type Movie {
        title: String
        director: String
        year: Int
    }

    input MovieInput {
        title: String
        director: String
    }

    type Stream {
        name: String
        renewalPrice: Int
        renewalDate: Int
    },

    input StreamInput {
        name: String
    }

    type Query {
        user(ID: ID!): User
        profile: Profile
        movie: [Movie]
        streamingServices: [Stream]
    }

    type Mutation {
        createUser(userInput: UserInput) : User!
        deleteUser(id: ID!): User!
        createMovie(title: String!): Movie!
        editMovie(ID: ID!,movieInput: MovieInput): Boolean
        addStreamService(StreamInput: StreamInput): Stream!
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
