const express = require("express");
const app = express();
const port = 3000;
// need to import database on line below
// const userData = require("/.json")
const graphql = require("graphql");

const {graphqlHTTP} = require('express-graphql')

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    //fields is all different queries
    fields: {
        getAllUsers: {
            type: new GraphQLList(UserType),
            args: { id: { type: GraphQLInt}},
            resolve(parent, args) {
                return userData
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: {
            type: UserType,
            args: {
                firstName: {type: GraphQLString},
                lastName: {type: GraphQLString},
                email: {type: GraphQLString},
                password: {type: GraphQLString},
                //need help figuring out how to add picture and subscriptions typical to each user
            },
            resolve (parent, args) {
                //assigns an id to each user account created
                userData.push({id: userData.length + 1, firstName: args.firstName, lastName: args.lastName, email: args.email, password: args.password})
                return args
            }
        }
    }
})

module.exports = new GraphQLSchema({query: RootQuery, mutation: Mutation})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true //allows you to see queries(receive data aka GET) and tests. turn to false if don't want to see
}))

app.listen(PORT, () => {
    console.log("Server running");
});