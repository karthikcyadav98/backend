const mongoose = require("mongoose");
const SurveyTypes = require("../graphql/types/surveys");
const SurveySchema = new mongoose.Schema(
  {
    IpName: { type: String, required: true },
    IpVoted: { type: Array, required: true },
    votedCount: { type: Number, required: true }
  },
  {
    timestamps: true
  }
);

const SurveyModel = mongoose.model("surveys", SurveySchema);
module.exports = SurveyModel;
