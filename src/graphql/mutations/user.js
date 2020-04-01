"use strict";
const GraphQL = require("graphql");
const { GraphQLString, GraphQLInt, GraphQLBoolean } = GraphQL;
const userType = require("../types/user.js");
const userResolver = require("../resolvers/user.js");

const userMutation = {
  createUser() {
    return {
      type: userType,
      description: "It will add user in the database",
      args: {
        name: {
          type: GraphQLString,
          description: "user name GraphQLString"
        },
        age: {
          type: GraphQLInt,
          description: "user age  GraphQLInt"
        },
        phoneNumber: {
          type: GraphQLInt,
          description: "user phoneNumber GraphQLInt"
        },
        status: {
          type: GraphQLBoolean,
          description: "user status GraphQLBoolean"
        },
        email: {
          type: GraphQLString,
          description: "user email GraphQLString"
        },
        token: {
          type: GraphQLString,
          description: "user token GraphQLString"
        }
      },
      resolve(parent, args, context, info) {
        return userResolver.createUser(parent, args, context, info);
      }
    };
  }
};
module.exports = userMutation;
