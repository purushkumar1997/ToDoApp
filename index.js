import { TodoApp } from "./app/TodoApp.js";

const app = new TodoApp();
const user = app.createUser("Purushottam");
const user2 = app.createUser("Nisha");

const t1 = user.taskManager.addTask({
  title: "Write Code",
  deadline: new Date(Date.now() + 86400000),
  tags: ["Writing", "tech"]
});

const t11 = user2.taskManager.addTask({
  title: "Devops",
  deadline: new Date(Date.now() + 86400000),
  tags: ["Writing", "tech"]
});


const t2 = user.taskManager.addTask({
  title: "Workout",
  startDate: new Date(Date.now() + 2 * 86400000),
  tags: ["health"]
});

const t12 = user2.taskManager.addTask({
  title: "Workout",
  startDate: new Date(Date.now() + 2 * 86400000),
  tags: ["health"]
});


user.taskManager.modifyTask(t1.id, { title: "Modify Code" });

user.taskManager.markCompleted(t1.id);

user.taskManager.removeTask(t2.id);

console.log("Current Tasks:", user.taskManager.listTasks());
console.log("Current Tasks:", user2.taskManager.listTasks());
console.log("Future Tasks:", user.taskManager.listTasks({ includeFuture: true }));
console.log("Future Tasks:", user2.taskManager.listTasks({tags: ["health", "tech"],includeFuture: true }));
console.log("Activity Log:", user.taskManager.getActivityLog());
console.log("Activity Log:", user2.taskManager.getActivityLog());
console.log("Statistics:", user.taskManager.getStatistics(new Date("2000-01-01"), new Date()));
console.log("Statistics:", user2.taskManager.getStatistics(new Date("2000-01-01"), new Date()));