const express = require("express");
const app = express();

const quizRoutes = require("./Routes/quiz.routes.js");
app.use(quizRoutes);

//Connect to DB
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Database!");
  })
  .catch((error) => {
    console.log(error);
});


module.exports = app;