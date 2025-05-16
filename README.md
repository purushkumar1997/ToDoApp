TO Do App

Develop a TODO task-tracking application that allows its users to maintain TODO lists. TODO tasks in the list can have a deadline and tags for easier grouping and management. You can demonstrate the working of the application using a driver program or necessary test cases. There is no requirement to use a database for persistence (instead, use memory to store data).
Features-
Users should be able to update the TODO list at any point in time add, modify, and remove tasks.
The application should support multiple users being able to update their todo tasks.
A task can be marked as completed and once it is completed, it is automatically removed from the TODO list.
Tasks can also be added to appear in the TODO list at a future date. Users should be able to query this task as per the filters applied.
Users should be able to see an activity log that describes additions, modifications, completions and removals of tasks from the TODO list during a particular time period.
Users should also be able to see statistics around how many tasks were added. completed, and spilled over the deadline during a particular time period.

Implementation requirements

Your solution should implement the following functions. Feel free to use the representation for objects you deem fit for the problem and the provided use cases.

addTask (task)
getTask (taskid) -> a task
modifyTask (task)
removeTask (taskId)
listTasks (.) -> a list of tasks that match the given filter order based on defined sort criteria
getStatistics (optional[timePeriod]) -> statistics for the given time period(if supplied)
getActivityLog (optional [timePeriod]) -> activity log for the given time period (if supplied)

Evaluation Criteria:
Completeness of functional requirements
Application of OO design principles
Code efficiency
Code readability and maintainability
Testability
Handling corner cases
Language proficiency
Use design patterns and seperation of concerns and oops concept
Do ciloding in javascript
