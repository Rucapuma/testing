const express = require("express");
const app = express();
const cors = require("cors");


var bodyParser = require('body-parser');

global.__basedir = __dirname;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const db = require("./models");

const Referral = db.unfdb;

// Routers

const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);
const referralRoutes = require("./routes/Referrals");
app.use('/referrals', referralRoutes);
const formsRouter = require("./routes/Forms");
app.use("/forms", usersRouter);


db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
