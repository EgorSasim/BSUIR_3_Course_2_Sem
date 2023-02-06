//inputs
const taskName$ = document.querySelector(".task-creator__task-name");
const taskStatus$ = document.querySelector(".task-creator__task-status");
const taskDateTime$ = document.querySelector(".task-creator__task-date-time");
const taskFile$ = document.querySelector(".task-creator__task-file");

const taskCreatorForm$ = document.querySelector(".task-creator");

//add button
const addTask$ = document.querySelector(".task-creator__task-add");

//tasks list
const tasksList$ = document.querySelector(".tasks-list");

const URL = "http://127.0.0.1:3000";

addTask$.onclick = () => {
  if (taskName$.value.length === 0) {
    alert("please, write task name before adding it");
  } else {
    callBack({ name: "gregory" });
  }
};

const drawAddedTask = () => {
  tasksList$.innerHTML += `
    <div class="task">
        <span class="tasks-list__task-name">
            ${taskName$.value}
        </span>
        <span class="tasks-list__task-status">
            ${taskStatus$.value}
        </span>
        <span class="tasks-list__task-file">
            ${taskDateTime$.value}
        </span>
        <span class="tasks-list__task-file">
            ${taskFile$.value}
        </span>
        <button class="tasks-list__delete-task">
            &times
        </button>
    </div>
    `;
};

function callBack(data) {
  console.log("call callback");
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  fetch(URL + "/data", options).then((response) =>
    console.log(
      "response: ",
      response
        .text()
        .then((resolve, reject) => console.log("resolve: ", resolve))
    )
  );
}
