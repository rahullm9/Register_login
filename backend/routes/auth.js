const express = require("express");
const User = require("../models/users");
const router = express.Router();
require("dotenv").config();

router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: "Signup successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "Please enter a valid email" });
    }
    const password = req.body.password;
    if (password) {
      const { password, ...userData } = user._doc;
      return res.status(200).json({ data: userData });
    }else{
      return res.status(201).json({ message: "Please enter a valid password" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
