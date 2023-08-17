import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { Todo, todosApi } from '@/src/todosApi';
import { useRouter } from 'next/router';

interface State {
  todosCount: number;
  activeTodosCount: number;
  getAll: () => Todo[];
  addTodo: (newTodo: Omit<Todo, 'id'>) => void;
  editTodo: (todo: Partial<Omit<Todo, 'id'>> & { id: string }) => void;
  removeTodo: (id: string) => void;
  removeCompletedTodos: () => void;
}

export const TodosContext = createContext<State | null>(null);

export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const router = useRouter();

  //getting the initial data
  useEffect(() => {
    setTodos(todosApi.getAll());
  }, []);

  const getAllTodos = useCallback(() => todos, [todos]);

  const getActiveTodos = useCallback(() => todos.filter(({ isCompleted }) => !isCompleted), [todos]);

  const getCompletedTodos = useCallback(() => todos.filter(({ isCompleted }) => isCompleted), [todos]);

  const getAll = useCallback(() => {
    const hash = router.asPath.split('#')[1] ?? '';
    if (hash === 'active') return getActiveTodos();
    else if (hash === 'completed') return getCompletedTodos();
    return getAllTodos();
  }, [getAllTodos, getActiveTodos, getCompletedTodos, router.asPath]);

  const addTodo: State['addTodo'] = newTodo => {
    setTodos(todosApi.add(newTodo));
  };

  const editTodo: State['editTodo'] = todo => {
    setTodos([...todosApi.edit(todo)]);
  };

  const removeTodo: State['removeTodo'] = id => {
    setTodos(todosApi.remove(id));
  };

  const removeCompletedTodos = () => {
    setTodos(todosApi.removeCompleted());
  };

  return (
    <TodosContext.Provider
      value={{
        todosCount: todos.length,
        activeTodosCount: getActiveTodos().length,
        getAll,
        addTodo,
        editTodo,
        removeTodo,
        removeCompletedTodos
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
