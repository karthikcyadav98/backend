import * as express from "express";
import * as mongoose from "mongoose";
import { getEnvironmentVariables } from "./envoirments/env";
const expressGraphQL = require("express-graphql");
var PORT = process.env.PORT || 4000;

const MainSchema = require("./graphql/schema");
var app: express.Application = express();

var port: Number = parseInt(<string>process.env.PORT) || 9000;

mongoose
  .connect(getEnvironmentVariables().db_url)
  .then(() => {
    app.listen(port, () => {
      console.log("running with ", getEnvironmentVariables().db_url);
    });
  })
  .catch(err => {
    console.log(err);
  });

app.use(
  "/graphql",
  expressGraphQL((request, response) => {
    return {
      graphiql: true,
      schema: MainSchema
    };
  })
);
