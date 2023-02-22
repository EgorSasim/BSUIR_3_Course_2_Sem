const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

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

const USERS = [
  {
    name: "Igor",
    password: "123",
  },
  {
    name: "Gregory",
    password: "456",
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

app.post("/login", authenticateToken, (req, res) => {
  const token = generateAccessToken(req.body.userName);
  res.json(token);
});

app.delete("/remove-task", (req, res) => {
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
  TASKS.splice(
    TASKS.findIndex((task) => task.id === taskId),
    1
  );
}

function generateAccessToken(userName) {
  return jwt.sign({ name: userName }, process.env.TOKEN_SECRET, {
    expiresIn: "1800s",
  });
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    console.log(err);

    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;

    next();
  });
}

function checkExistingName(name) {
  return USERS.find((user) => user.name === name);
}
