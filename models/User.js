import { TaskManager } from "../services/TaskManager.js";

let userIdCounter = 0;

export class User {
  constructor(name, activityLog) {
    this.id = ++userIdCounter;
    this.name = name;
    this.taskManager = new TaskManager(this.id, activityLog);
  }
}
