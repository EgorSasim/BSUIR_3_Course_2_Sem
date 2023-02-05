const taskName$ = document.querySelector(".task-creator__task-name");
const taskStatus$ = document.querySelector(".task-creator__class-status");
const taskFile$ = document.querySelector(".task-creator__task-file");

const addTask$ = document.querySelector(".task-creator__task-add");

const tasksList$ = document.querySelector(".tasks-list");

addTask$.onclick = () => {
  if (taskName$.value.length === 0) {
    alert("please, write task name before adding it");
  } else {
    drawAddedTask();
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
            ${taskFile$.value}
        </span>
        <button class="tasks-list__delete-task">
            &times
        </button>
    </div>
    `;
};
