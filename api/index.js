const express = require("express");
const cors = require("cors");
const User = require("./models/User.js");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();

const bcryptSalt = bcrypt.genSaltSync(12);

app.use(express.json());

app.use(cors({ credentials: true, origin: "http://127.0.0.1:5173" }));

mongoose.connect(process.env.MONGO_URL);

// app.get("/test", (req, res) => {
//   res.json("test ok");
// });

app.post("/register", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const { name, email, password } = req.body;
  console.log(err.response.data);

  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

app.listen(4000);
// lK4vKluDecHNBoNw
