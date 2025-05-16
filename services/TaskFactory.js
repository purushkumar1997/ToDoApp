// Factory Pattern

import { Task } from "../models/Task.js";

export class TaskFactory {
  static createTask(data) {
    return new Task(data);
  }
}
