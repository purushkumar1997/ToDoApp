export class ActivityLog {
  constructor() {
    this.logs = [];
  }

  record(userId, action, taskId, timestamp = new Date()) {
    this.logs.push({ userId, action, taskId, timestamp });
  }

  getLogs(userId, start, end) {
    return this.logs.filter(
      (log) =>
        log.userId === userId &&
        (!start || (log.timestamp >= start && log.timestamp <= end))
    );
  }
}
