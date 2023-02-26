const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("./middleware/auth");
require("dotenv").config();

const constants = require("./constants");
const functions = require("./functions");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("", (req, res) => {
  res.send(JSON.stringify(constants.TASKS));
  res.end();
});

app.post("/add-task", (req, res) => {
  let task = req.body;
  functions.addTask(task);
  res.send(JSON.stringify(constants.TASKS));
  res.end();
});

app.post("/sign-up", (req, res) => {
  try {
    const { login, password } = req.body;

    const userAlreadyExists = functions.isUserAlreadyExists(login);

    if (userAlreadyExists) {
      return res.status(409).send("User with such login already exists");
    }

    const user = {
      login: login,
      password: bcrypt.hash(password, 10),
    };

    functions.addUser(user);

    const token = jwt.sign({ password: password }, process.env.TOKEN_SECRET, {
      expiresIn: "1h",
    });

    user.token = token;

    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});

app.post("/secret", auth, (req, res) => {
  res.status(200).json({ secret: "some secret info" });
});

app.delete("/remove-task", (req, res) => {
  let taskId = req.body.id;
  functions.removeTask(taskId);
  res.send(JSON.stringify(constants.TASKS));
  res.end();
});

app.listen(constants.PORT, () => {
  console.log(`server started at port: ${constants.PORT}`);
});
