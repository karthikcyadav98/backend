const SurveyModel = require("../../models/survey");
const surveyResolver = {
  addSurvey: async (parent, args, context, info) => {
    try {
      const filter = {
        "IpVoted.IpVoted": { $ne: args.IpName }
      };

      const update = {
        $inc: { votedCount: 1 },
        $push: { IpVoted: { IpVoted: args.IpName } }
      };
      let doc = await SurveyModel.findOneAndUpdate(filter, update, {
        new: false,
        upsert: false
      });
      console.log("doc", doc);
      // let response = await newUser.save();
      return doc;
    } catch (error) {
      return error;
    }
  },
  getSurvey: async (parent, args, context, info) => {
    try {
      let response = await SurveyModel.find({});
      console.log("res", response);
      return response;
    } catch (error) {
      return error;
    }
  }
};

module.exports = surveyResolver;
