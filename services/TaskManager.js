import { TaskFactory } from "./TaskFactory.js";
import { TaskStatus } from "../enums/TaskStatus.js";
import { StatisticsService } from "./StatisticsService.js";

export class TaskManager {
  constructor(userId, activityLog) {
    this.userId = userId;
    this.tasks = [];
    this.activityLog = activityLog;
  }

  addTask(data) {
    const task = TaskFactory.createTask(data);
    this.tasks.push(task);
    this.activityLog.record(this.userId, "ADD", task.id);
    return task;
  }

  getTask(taskId) {
    return this.tasks.find((t) => t.id === taskId);
  }

  modifyTask(taskId, updates) {
    const task = this.getTask(taskId);
    if (!task) {
        throw new Error(`Task not found for this Id - ${taskId}`);
    }
      
    Object.assign(task, updates);
    this.activityLog.record(this.userId, "MODIFY", task.id);
    return task;
  }

  removeTask(taskId) {
    const index = this.tasks.findIndex((t) => t.id === taskId);
    if (index === -1) {
        throw new Error(`Task not found for this Id - ${taskId}`)
    };
    const [removed] = this.tasks.splice(index, 1);
    this.activityLog.record(this.userId, "REMOVE", removed.id);
    return "Task removed successfully";
  }

  markCompleted(taskId) {
    const task = this.getTask(taskId);
    if (!task) {
        throw new Error(`Task not found for this Id - ${taskId}`);
    }
    if (task && task.status !== TaskStatus.COMPLETED) {
      task.markCompleted();
      this.activityLog.record(this.userId, "COMPLETE", task.id);
      return "Task has been marked completed";
    }
    return `This task can't be completed`;
  }

  listTasks({ tags = [], includeFuture = false } = {}) {
    const now = new Date();
    return this.tasks.filter((task) => {
    console.log(task)
    if (task.status === TaskStatus.COMPLETED) return false;
    if (!includeFuture && task.startDate > now) return false;
    if (tags.length > 0) {
      const hasMatchingTag = tags.some((tag) => task.tags.includes(tag));
      if (!hasMatchingTag) {
        return false;
      }
    }
    return true;
    });
  }

  getActivityLog(start, end) {
    return this.activityLog.getLogs(this.userId, start, end);
  }

  getStatistics(start, end) {
    const statsService = new StatisticsService(this);
    return statsService.getStats(start, end);
  }
}
