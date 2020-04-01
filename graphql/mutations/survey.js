"use strict";
const surveyResolver = require("../resolvers/survey");
const SurveyTypes = require("../types/surveys");
const GraphQL = require("graphql");
const {
  GraphQLString,
  GraphQLInt,

  GraphQLNumber,
  GraphQLBoolean
} = GraphQL;

const surveyMutation = {
  addSurvey() {
    return {
      type: SurveyTypes,
      description: "It will add user in the database",
      args: {
        IpName: {
          type: GraphQLString,
          description: "user name GraphQLString"
        },
        votedCount: {
          type: GraphQLInt,
          description: "user age  GraphQLInt"
        }
      },
      resolve(parent, args, context, info) {
        return surveyResolver.addSurvey(parent, args, context, info);
      }
    };
  }
};
module.exports = surveyMutation;
