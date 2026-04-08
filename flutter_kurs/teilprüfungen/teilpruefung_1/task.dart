/// Since the task is very straightforward, I have left the entire implementation in one file.
/// In a real application, the main function, the task class, and other logic would be moved to separate files.

// a) Task class to represent a task with a name, deadline, and completion status
class Task {
  final String name;
  final DateTime deadline;
  final bool isCompleted;

  Task({required this.name, required this.deadline, this.isCompleted = false});

  // copyWith method to create a new instance with modified properties
  Task copyWith({String? name, DateTime? deadline, bool? isCompleted}) {
    return Task(
      name: name ?? this.name,
      deadline: deadline ?? this.deadline,
      isCompleted: isCompleted ?? this.isCompleted,
    );
  }

  Task markAsCompleted() {
    return copyWith(isCompleted: true);
  }
}

// b) List of tasks
List<Task> tasks = [
  Task(name: "Task 1", deadline: DateTime(2024, 7, 1)),
  Task(name: "Task 2", deadline: DateTime(2024, 7, 15)),
  Task(name: "Task 3", deadline: DateTime(2024, 8, 1)),
];

// c) Function to add a new task
void addTask(String name, DateTime deadline) {
  tasks.add(Task(name: name, deadline: deadline));
}

// d) Async function to simulate fetching tasks from a server
Future<List<Task>> fetchTasks() async {
  await Future.delayed(Duration(seconds: 2)); // Simulate network delay
  return tasks;
}

// f) Function to find a task by name and mark it as completed
void completeTask(String name) {
  int index = tasks.indexWhere((task) => task.name == name);

  if (index != -1) {
    tasks[index] = tasks[index].markAsCompleted();
  }
}

// Main function to demonstrate fetching and displaying tasks
void main() async {
  // e) Demonstrate fetching and displaying tasks
  List<Task> fetchedTasks = await fetchTasks();
  for (var task in fetchedTasks) {
    print(
      "Task: ${task.name}, Deadline: ${task.deadline}, Completed: ${task.isCompleted}",
    );
  }

  // Demonstrate finding a task and marking it as completed
  completeTask("Task 2");
  print("\nAfter marking Task 2 as completed:\n");
  for (var task in tasks) {
    print(
      "Task: ${task.name}, Deadline: ${task.deadline}, Completed: ${task.isCompleted}",
    );
  }
}
