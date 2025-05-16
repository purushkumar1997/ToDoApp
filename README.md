# TODO Task-Tracking Application (Multi-User)

This is an in-memory TODO Task Tracking Application built using **JavaScript**, following Object-Oriented Design principles and using design patterns like **Factory**, **Repository**, and **Strategy** where applicable. The application supports **multiple users**, each maintaining their own set of tasks.

---

## 🧩 Features

- ✅ Add, modify, and remove tasks at any time.
- 👥 Multiple users supported — each has an independent TODO list.
- 📅 Tasks can have deadlines, start dates, and tags.
- ⏳ Tasks can be scheduled to appear in the TODO list in the future.
- 📂 Query tasks by filters such as `tag` and `startDate`.
- 📜 Activity logs for each user, filtered by time period.
- 📊 Task statistics: number of tasks added, completed, and missed (deadline spillover).
- 🧠 Built with clean separation of concerns and design patterns.

---

## 🏗️ Architecture Overview

- **TaskManager**: Manages a user's tasks (add, remove, modify, etc.).
- **TodoApp**: Application-level controller for managing users and delegating task operations.
- **Task**: Core model containing task data and behavior.
- **TaskFactory**: Implements the Factory Pattern for creating tasks.
- **Repositories**: Abstracts storage for users/tasks (e.g., in-memory).
- **Logger**: Tracks task activity.
- **StatisticsService**: Computes and returns stats for any given time period.

---

## 🔧 Key Classes and Interfaces

### `Task`

Represents a single task with:

- `id`, `title`, `deadline`, `startDate`
- `status`: PENDING or COMPLETED
- `tags`: array of strings
- `createdAt`, `updatedAt`

### `TaskManager`

Manages a single user's tasks:

- `addTask`, `getTask`, `modifyTask`, `removeTask`
- `listTasks({ tags, includeFuture })`
- `getActivityLog(start, end)`
- `getStatistics(start, end)`

### `TodoApp`

Entry point of the app:

- Adds users
- Delegates operations to the correct user’s `TaskManager`

### `InMemoryUserTaskRepository`

- Maintains mapping of `userId → TaskManager`
- Allows easy switch to external DB in future

---
