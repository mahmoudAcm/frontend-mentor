import generateId from '@/src/libs/generateId';

export interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

class TodosApi {
  private todos: Todo[] = [];

  constructor() {
    if (typeof window === 'undefined') return;
    this.todos = (JSON.parse(localStorage.getItem('todos') ?? '[]') ?? []) as Todo[];
  }

  getAll = () => this.todos;

  getAllActive = () => this.todos.filter(({ isCompleted }) => !isCompleted);

  getAllCompleted = () => this.todos.filter(({ isCompleted }) => isCompleted);

  add(newTodo: Omit<Todo, 'id'>) {
    const todo = { ...newTodo, id: generateId() };
    this.todos = [todo, ...this.todos];
    localStorage.setItem('todos', JSON.stringify(this.todos));
    return this.todos;
  }

  edit(todo: Partial<Omit<Todo, 'id'>> & { id: string }) {
    const todoIndex = this.todos.findIndex(({ id }) => id === todo.id);
    if (todoIndex !== -1) {
      Object.assign(this.todos[todoIndex], todo);
    }
    localStorage.setItem('todos', JSON.stringify(this.todos));
    return this.todos;
  }

  remove(id: string) {
    this.todos = this.todos.filter(({ id: todoId }) => todoId !== id);
    localStorage.setItem('todos', JSON.stringify(this.todos));
    return this.todos;
  }

  removeCompleted() {
    this.todos = this.getAllActive();
    localStorage.setItem('todos', JSON.stringify(this.todos));
    return this.todos;
  }
}

export const todosApi = new TodosApi();
