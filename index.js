const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { signupUser } = require("./Controllers/Auth.controller");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send({ message: "Welcome Back, Sir" }));
app.post("/mess", signupUser);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () =>
  console.log(`Server started on ${process.env.PORT}`)
);
