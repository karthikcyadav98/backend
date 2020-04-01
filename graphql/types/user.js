const GraphQL = require("graphql");
const { GraphQLBoolean, GraphQLString, GraphQLInt } = GraphQL;

const userType = new GraphQL.GraphQLObjectType({
  name: "userType",
  description: "user Details",
  fields: () => ({
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
  })
});
module.exports = userType;
