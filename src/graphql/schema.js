const surveyMutation = require("./mutations/survey");
const GraphQL = require("graphql");

const { GraphQLObjectType, GraphQLSchema } = GraphQL;
const EnhancedRedis = require("../redis/redis.js");
const userMutation = require("./mutations/user.js");
const userQuery = require("./query/user.js");
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  description: "ALL QUERY",
  fields: {
    getAlluser: userQuery.userList()
  }
});

const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  description: "ALL MUTATION",
  fields: {
    createUser: userMutation.createUser(),
    surveyMutation: surveyMutation.addSurvey()
  }
});
const MainSchema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
  persistedQueries: {
    cache: new EnhancedRedis()
  }
});
module.exports = MainSchema;
