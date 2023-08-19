import generateId from '@/src/libs/generateId';

const LIMIT = 0.04; // limit in mb

export interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

class LocalStorageService {
  private static storageKey = 'todos';

  static saveData<T = any>(data: T) {
    if (typeof window === 'undefined') return;

    const json = JSON.stringify(data);
    const storage = parseFloat((json.length / 1024 ** 2).toFixed(3));

    if (storage > LIMIT) throw new Error(`Exceeded the storage limit ${LIMIT}mb.`);

    try {
      localStorage.setItem(this.storageKey, json);
    } catch (error) {
      throw new Error('Your device storage has been exceeded.');
    }
  }

  static loadData<T = any>() {
    if (typeof window === 'undefined') return null;
    const data = localStorage.getItem(this.storageKey);
    return data ? (JSON.parse(data) as T) : null;
  }
}

class TodosApi {
  private todos: Todo[] = [];

  constructor() {
    this.todos = LocalStorageService.loadData<Todo[]>() ?? [];
  }

  private updateLocalStorage() {
    LocalStorageService.saveData(this.todos);
  }

  getAll = () => this.todos;

  getAllActive = () => this.todos.filter(({ isCompleted }) => !isCompleted);

  add(newTodo: Omit<Todo, 'id'>) {
    const todo = { ...newTodo, id: generateId() };
    try {
      this.todos = [todo, ...this.todos];
      this.updateLocalStorage();
    } catch (error) {
      this.todos.splice(0, 1);
      throw error;
    }
    return this.todos;
  }

  edit(todo: Partial<Omit<Todo, 'id'>> & { id: string }) {
    const todoIndex = this.todos.findIndex(({ id }) => id === todo.id);
    if (todoIndex !== -1) {
      Object.assign(this.todos[todoIndex], todo);
    }
    this.updateLocalStorage();
    return this.todos;
  }

  remove(id: string) {
    this.todos = this.todos.filter(({ id: todoId }) => todoId !== id);
    this.updateLocalStorage();
    return this.todos;
  }

  removeCompleted() {
    this.todos = this.getAllActive();
    this.updateLocalStorage();
    return this.todos;
  }

  reorder(srcIndex: number, destIndex: number) {
    const newTodos = Array.from(this.todos);
    const [removed] = newTodos.splice(srcIndex, 1);
    newTodos.splice(destIndex, 0, removed);
    this.todos = newTodos;
    this.updateLocalStorage();
    return this.todos;
  }
}

export const todosApi = new TodosApi();
