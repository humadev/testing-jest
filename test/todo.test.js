const Todo = require('../todo');

describe('Todo', () => {
  let todo;

  beforeEach(() => {
    todo = new Todo();
  });

  test('menambahkan list', () => {
    todo.addTask('tugas pertama');
    expect(todo.tasks.length).toBe(1);
  });

  test('throws error jika menambahkan list kosong', () => {
    expect(() => todo.addTask()).toThrow("Task cannot be empty");
  });

  test('menghapus list', () => {
    todo.addTask('beli sabun');
    todo.removeTask('beli sabun');
    expect(todo.tasks.length).toBe(0);
  });

  test('menghapus list kosong', () => {
    expect(() => todo.removeTask('beli sabun')).toThrow("Task not found");
  });

  test('marks task as completed', () => {
    todo.addTask('Read book');
    todo.markAsCompleted('Read book');
    expect(todo.tasks[0].completed).toBe(true);
  });

  test('marks task as completed kosong', () => {
    expect(() => todo.markAsCompleted('Read book')).toThrow("Task not found");
  });
});