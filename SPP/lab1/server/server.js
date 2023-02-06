const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const PORT = 3000;

const TASKS = [
  {
    taskName: "Do homework",
    taskStatus: "In progress",
    taskDateTime: "2023-05-07T16:00",
    taskFile: "",
  },
  {
    taskName: "Wash car",
    taskStatus: "Done",
    taskDateTime: "2020-10-07T16:00",
    taskFile: "",
  },
];

const app = express();

app.use(express.static(path.join(__dirname, "../client/")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "../client/index.html"));
});

app.post("/data", (req, res) => {
  let data = req.body;
  if (Object.keys(data).length) {
    TASKS.push(data);
  }
  res.send(JSON.stringify(TASKS));
  res.end();
});

app.listen(PORT);
