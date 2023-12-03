const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config;

const User = require("./models/Emails");

const app = express();
const PORT = 3000;

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

mongoose.connect(
  "mongodb+srv://EdgeGambit:bHJiLFye0zZYqHfJ@cluster0.hzvupoa.mongodb.net/?retryWrites=true&w=majority"
);

app.get("/test", async (req, res) => {
  res.json("test ok");
});

app.post("/joinwaitlist", async (req, res) => {
  const { email } = req.body;

  const emailDoc = await User.create({
    email,
  });

  res.json("The email has been sent");
});

app.listen(PORT, () => {
  console.log("The server is running at  port 3000");
});
