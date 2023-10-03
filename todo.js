class Todo {
    tasks = [];
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      if(!task) throw new Error("Task cannot be empty");
      this.tasks.push({ task, completed: false });
    }
  
    removeTask(task) {
      const index = this.tasks.findIndex(t => t.task === task);
      if(index === -1) throw new Error("Task not found");
      this.tasks.splice(index, 1);
    }
  
    markAsCompleted(task) {
      const index = this.tasks.findIndex(t => t.task === task);
      if(index === -1) throw new Error("Task not found");
      this.tasks[index].completed = true;
    }
  }
  
  module.exports = Todo;
  