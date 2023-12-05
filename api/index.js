const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const User = require("./models/Emails");

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "https://www.edgegambit.com/",
  })
);
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"));

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

app.listen(process.env.PORT, () => {
  console.log("The server is running at  port 3000");
});
