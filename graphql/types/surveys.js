const GraphQL = require("graphql");
const { GraphQLBoolean, GraphQLList, GraphQLString, GraphQLInt } = GraphQL;

const IpVoted = new GraphQL.GraphQLObjectType({
  name: "IpVoted",
  fields: () => ({
    IpVoted: {
      type: GraphQLString,
      description: "usesr"
    }
  })
});
const serveyType = new GraphQL.GraphQLObjectType({
  name: "serveyType",
  description: "user Details",
  fields: () => ({
    IpName: {
      type: GraphQLString,
      description: "user name GraphQLString"
    },
    IpVoted: {
      type: new GraphQLList(IpVoted),
      description: "user age  GraphQLInt"
    },
    IpCount: {
      type: GraphQLInt,
      description: "user age  GraphQLInt"
    }
  })
});

module.exports = serveyType;
