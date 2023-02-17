const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const PORT = 3000;

const TaskStatus = {
  ToDo: "To do",
  InProgress: "In progress",
  Done: "Done",
  NoStatus: "No status",
};

const TASKS = [
  {
    id: 1,
    name: "wash the car",
    status: TaskStatus.ToDo,
    completionTime: new Date(),
  },
  {
    id: 2,
    name: "buy flowers",
    status: TaskStatus.NoStatus,
    completionTime: new Date(),
  },
  {
    id: 3,
    name: "fix bug",
    status: TaskStatus.Done,
    completionTime: new Date(),
  },
];

const TASKS_IDS = new Set([TASKS.map((task) => task.id)]);

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
  res.send(JSON.stringify(TASKS));
  res.end();
});

app.post("/add-task", (req, res) => {
  let task = req.body;
  addTask(task);
  res.send(JSON.stringify(TASKS));
  res.end();
});

app.delete("/remove-task", (req, res) => {
  console.log(req.body);
  let taskId = req.body.id;
  removeTask(taskId);
  res.send(JSON.stringify(TASKS));
  res.end();
});

app.listen(PORT, () => {
  console.log(`server started at port: ${PORT}`);
});

function addTask(task) {
  task.id = getRandomNum();
  while (task.id in TASKS_IDS) {
    task.id = getRandomNum();
  }
  TASKS_IDS.add(task.id);
  TASKS.push(task);
}

function getRandomNum(min = 0, max = 10000) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function removeTask(taskId) {
  console.log(taskId);
  console.log(TASKS.findIndex((task) => task.id === taskId));
  TASKS.splice(
    TASKS.findIndex((task) => task.id === taskId),
    1
  );
}
