const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
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

app.delete("/remove-task", (req, res) => {
  let taskId = req.body.id;
  functions.removeTask(taskId);
  res.send(JSON.stringify(constants.TASKS));
  res.end();
});

app.listen(constants.PORT, () => {
  console.log(`server started at port: ${constants.PORT}`);
});
