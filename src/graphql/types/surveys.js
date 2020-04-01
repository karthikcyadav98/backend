const GraphQL = require("graphql");
const { GraphQLBoolean, GraphQLString, GraphQLInt } = GraphQL;

const serveyType = new GraphQL.GraphQLObjectType({
  name: "serveyType",
  description: "user Details",
  fields: () => ({
    name: {
      type: GraphQLString,
      description: "user name GraphQLString"
    },
    IpVoted: {
      type: GraphQLString,
      description: "user age  GraphQLInt"
    }
  })
});
module.exports = serveyType;
