const constants = require("./constants");

function addTask(task) {
  task.id = getRandomNum();
  while (task.id in constants.TASKS_IDS) {
    task.id = getRandomNum();
  }
  constants.TASKS_IDS.add(task.id);
  constants.TASKS.push(task);
}

function getRandomNum(min = 0, max = 10000) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function removeTask(taskId) {
  constants.TASKS.splice(
    constants.TASKS.findIndex((task) => task.id === taskId),
    1
  );
}

module.exports = { addTask, removeTask };
