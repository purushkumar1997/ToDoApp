import { TaskStatus } from "../enums/TaskStatus.js";

export class StatisticsService {
  constructor(taskManager) {
    this.taskManager = taskManager;
  }

  getStats(start, end) {
    const tasks = this.taskManager.tasks.filter(
      (task) => task.createdAt >= start && task.createdAt <= end
    );

    const added = tasks.length;
    const completed = tasks.filter((t) => t.status === TaskStatus.COMPLETED).length;
    const missed = tasks.filter(
      (t) =>
        t.status !== TaskStatus.COMPLETED &&
        t.deadline &&
        new Date() > t.deadline
    ).length;

    return { added, completed, missed };
  }
}
