const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport")
require('./Config/passport')(passport);


app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true, // Allow cookies to be sent
}));

app.use(
  session({
    secret:process.env.SESSION_SECRET,
    resave: false,  // we can resave the session if nothing is change
    saveUninitialized: false,  // we can save empty value
  })
);

app.use(passport.initialize());
app.use(passport.session());


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const userRoutes = require("./Routes/user.routes");
app.use(userRoutes);

const authRoutes = require("./Routes/auth.routes.js");
app.use(authRoutes);

const quizRoutes = require("./Routes/quiz.routes.js");
app.use(quizRoutes);

const {ensureAuthenticated, isAuthenticated} = require("./Middlewares/auth.middleware");
app.get("/", ensureAuthenticated, (req, res) => {
  res.redirect("http://localhost:3000/");
});


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