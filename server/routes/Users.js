const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcryptjs");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");
const db = require("../models");

router.post("/", async (req, res) => {
  const { username, password, Firstname, Lastname, Email, Phonenumber, Notification, Relationship } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      password: hash,
      Firstname: Firstname, 
      Lastname: Lastname, 
      Email: Email, 
      Phonenumber: Phonenumber, 
      Notification: Notification, 
      Relationship: Relationship,
    });
    res.json("SUCCESS");
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await Users.findOne({ where: { username: username } });

  if (!user) res.json({ error: "User Doesn't Exist" });

  bcrypt.compare(password, user.password).then(async (match) => {
    if (!match) res.json({ error: "Wrong Username And Password Combination" });

    const accessToken = sign(
      { username: user.username, id: user.id },
      "importantsecret"
    );
    res.json({ token: accessToken, username: username, id: user.id });
  });
});

router.get("/auth", validateToken, (req, res) => {
  res.json(req.user);
});



router.put("/updateInfo", validateToken, async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const user = await Users.findOne({ where: { username: req.user.username } });

  bcrypt.compare(oldPassword, user.password).then(async (match) => {
    if (!match) res.json({ error: "Wrong Password Entered!" });

    bcrypt.hash(newPassword, 10).then((hash) => {
      Users.update(
        { password: hash },
        { where: { username: req.user.username } }
      );
      res.json("SUCCESS");
    });
  });
});


router.get("/basicinfo", async (req, res) => {
  const id = req.query.id;
  const user = await Users.findOne({ where: { id: id } });
  res.json(user);
})


router.put("/updateUser", validateToken, async (req, res) => {
  const { Firstname, 
    Lastname, 
    Email, 
    Phonenumber, 
    Notification, 
    Relationship, } = req.body;
  const user = await Users.findOne({ where: { username: req.user.username } });
    
      Users.update(
        { Firstname: Firstname, 
          Lastname: Lastname, 
          Email: Email, 
          Phonenumber: Phonenumber, 
          Notification: Notification, 
          Relationship: Relationship, },
        { where: { id: user.id } }
      );
      res.json("SUCCESS");
});


module.exports = router;