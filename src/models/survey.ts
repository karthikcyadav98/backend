import * as mongoose from "mongoose";
import SurveyTypes from "../graphql/types/surveys";
export const SurveySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    IpVoted: { type: Array, required: true },
    votedCount: { type: Number, required: true }
  },
  {
    timestamps: true
  }
);

const SurveyModel = mongoose.model("surveys", SurveySchema);
module.exports = SurveyModel;
