const GraphQL = require("graphql");
const { GraphQLList } = GraphQL;

const serveyType = require("../types/surveys.js");

const surveyResolver = require("../resolvers/survey.js");

const ServeyQuery = {
  userList() {
    return {
      type: new GraphQLList(serveyType),
      description: "This will return all emp details",
      resolve(parent, args, context, info) {
        return surveyResolver.getSurvey();
      }
    };
  }
};

module.exports = ServeyQuery;
