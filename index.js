const express = require("express");
const mongoose = require("mongoose");
const { getEnvironmentVariables } = require("./envoirments/env");
const expressGraphQL = require("express-graphql");
var cors = require("cors");
const MainSchema = require("./graphql/schema");
var app = express();

var port = process.env.PORT || 9000;
app.use(cors());
mongoose
  .connect("mongodb://localhost:27017/MasterDatabaseDevlopment")
  .then(() => {
    app.listen(port, () => {
      console.log("running with ");
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
