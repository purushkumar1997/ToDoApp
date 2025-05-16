import { ActivityLog } from "../services/ActivityLog.js";
import { User } from "../models/User.js";

export class TodoApp {
  constructor() {
    this.activityLog = new ActivityLog();
    this.users = new Map();
  }

  createUser(name) {
    if (this.users.has(name)) {
        throw new Error(`User with name "${name}" already exists.`);
    }
    const user = new User(name, this.activityLog);
    this.users.set(user.name, user);
    return user;
  }

  getUser(userName) {
    const user = this.users.get(userName);
    if (!user) {
        throw new Error(`User not found for this name ${userName}.`);
    }
  }
}


export class IUserRepo {
  createUser(userId) {throw "Not implemented"}
}
