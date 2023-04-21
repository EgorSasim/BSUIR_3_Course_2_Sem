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
    taskId: 1,
  },
  {
    taskName: "Wash car",
    taskStatus: "Done",
    taskDateTime: "2020-10-07T16:00",
    taskFile: "",
    taskId: 2,
  },
];

const TASK_STATUSES = ["No status", "To do", "In progress", "Done"];
const app = express();

app.use(express.static(path.join(__dirname, "../client/")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
  })
);

app.use(cors({ origin: ["http://localhost:3000", "http://127.0.0.1:3000"] }));

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "../client/index.html"));
});

app.post("/tasks-list", (req, res) => {
  let task = req.body;
  if (Object.keys(task).length) {
    if (!task.taskId) {
      task.taskId = Math.round(Math.random() * 10000);
    }
    TASKS.push(task);
  }
  res.send(JSON.stringify(TASKS));
  res.end();
});

app.post("/delete-task", (req, res) => {
  let task = req.body;
  removeTask(task.id);
  res.send(JSON.stringify(TASKS));
  res.end();
});

app.post("/sort-tasks", (req, res) => {
  let order = req.body;
  console.log("order-sort: ", order.sort);
  sortTasks(order.sort);
  res.send(TASKS);
  res.end();
});

app.listen(PORT);

function removeTask(taskId) {
  TASKS.splice(
    TASKS.findIndex((task) => task.taskId == taskId),
    1
  );
}

function sortTasks(order) {
  console.log("sort tasks order: ", order);
  if (order == "ascending") {
    TASKS.sort(
      (task1, task2) =>
        TASK_STATUSES.findIndex((status) => status == task1.taskStatus) -
        TASK_STATUSES.findIndex((status) => status == task2.taskStatus)
    );
  } else {
    TASKS.sort(
      (task1, task2) =>
        TASK_STATUSES.findIndex((status) => status == task2.taskStatus) -
        TASK_STATUSES.findIndex((status) => status == task1.taskStatus)
    );
  }
}
