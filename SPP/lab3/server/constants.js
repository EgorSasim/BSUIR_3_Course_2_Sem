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

const USERS = [
  {
    login: "Igor",
    password: "123",
  },
  {
    login: "Gregory",
    password: "456",
  },
];

module.exports = { PORT, TASKS, USERS, TASKS_IDS };
