import { TaskStatus } from "../enums/TaskStatus.js";

let taskIdCounter = 0;

export class Task {
  constructor({ title, deadline = null, tags = [], startDate = new Date() }) {
    this.id = ++taskIdCounter;
    this.title = title;
    this.deadline = deadline;
    this.tags = tags;
    this.startDate = startDate;
    this.createdAt = new Date();
    this.status = TaskStatus.PENDING;
  }

  markCompleted() {
    this.status = TaskStatus.COMPLETED;
    this.completedAt = new Date();
  }
}
