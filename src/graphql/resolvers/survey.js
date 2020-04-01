const SurveyModel = require("../../models/survey");
const surveyResolver = {
  addSurvey: async (parent, args, context, info) => {
    var newUser = new SurveyModel({
      IpName: args.IpName,
      votedCount: args.votedCount,
      IpVoted: []
    });
    try {
      let response = await newUser.save();
      return response;
    } catch (error) {
      return error;
    }
  }
};

module.exports = surveyResolver;
