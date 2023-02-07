//inputs
const taskName$ = document.querySelector(".task-creator__task-name");
const taskStatus$ = document.querySelector(".task-creator__task-status");
const taskDateTime$ = document.querySelector(".task-creator__task-date-time");
const taskFile$ = document.querySelector(".task-creator__task-file");

//add button
const addTask$ = document.querySelector(".task-creator__task-add");

//tasks list
const tasksList$ = document.querySelector(".tasks-list");

const URL = "http://127.0.0.1:3000";

addTask();

addTask$.onclick = () => {
  if (taskName$.value.length === 0) {
    alert("please, write task name before adding it");
  } else {
    addTask({
      taskName: taskName$.value,
      taskStatus: taskStatus$.options[taskStatus$.selectedIndex].text,
      taskDateTime: taskDateTime$.value,
      taskFile: taskFile$.value,
    });
  }
};

function drawAddedTask(taskName, taskStatus, taskDateTime, taskFile, taskId) {
  const addedElement = `
  <div class="task ${taskId}">
      <span class="tasks-list__task-name">
          ${taskName}
      </span>
      <span class="tasks-list__task-status">
          ${taskStatus}
      </span>
      <span class="tasks-list__task-file">
          ${taskDateTime}
      </span>
      <span class="tasks-list__task-file">
          ${taskFile}
      </span>
      <button class="tasks-list__delete-task">
          &times
      </button>
  </div>
  `;

  tasksList$.innerHTML += addedElement;

  for (let task of document.querySelectorAll(".task")) {
    task.children[task.children.length - 1].onclick = () => {
      removeTask(task.classList[1]);
    };
  }
}

function addTask(data) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  clearTasksList();
  fetch(URL + "/tasks-list", options).then((response) =>
    response.text().then((resolve, reject) =>
      JSON.parse(resolve).forEach((task) => {
        drawAddedTask(
          task.taskName,
          task.taskStatus,
          task.taskDateTime,
          task.taskFile,
          task.taskId
        );
      })
    )
  );
}

function clearTasksList() {
  tasksList$.innerHTML = "";
}

function removeTask(taskId) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: taskId }),
  };
  clearTasksList();
  fetch(URL + "/delete-task", options).then((response) =>
    response.text().then((resolve, reject) =>
      JSON.parse(resolve).forEach((task) => {
        drawAddedTask(
          task.taskName,
          task.taskStatus,
          task.taskDateTime,
          task.taskFile,
          task.taskId
        );
      })
    )
  );
}
