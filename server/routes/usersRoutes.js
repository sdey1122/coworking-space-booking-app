const router = require("express").Router();
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const User = require("../models/usersModel");
const { userValidationRules } = require("../helpers/usersValidation");
const jwt = require("jsonwebtoken");

// Register
router.post("/register", userValidationRules(), async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
        success: false,
        data: null,
      });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({
      message: "User created successfully",
      success: true,
      data: { name: newUser.name, email: newUser.email },
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      success: false,
      data: null,
    });
  }
});

// Login

router.post("/login", async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });
    if (!userExists) {
      return res.send({
        message: "User does not exists",
        success: false,
        data: null,
      });
    }
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      userExists.password
    );
    if (!passwordMatch) {
      return res.send({
        message: "Invalid email / password",
        success: false,
        data: null,
      });
    }
    const token = jwt.sign(
      { userId: userExists._id },
      "process.env.JWT_SECRET",
      {
        expiresIn: "1d",
      }
    );
    res.send({
      message: "User logged in successfully",
      success: true,
      data: token,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
      data: null,
    });
  }
});

module.exports = router;
