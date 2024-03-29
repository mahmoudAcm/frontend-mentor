import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { Todo, todosApi } from '@/src/todosApi';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { Backdrop, Box, Fade, IconButton, Typography } from '@mui/material';
import CrossIcon from '@/src/icons/CrossIcon';

interface State {
  todosCount: number;
  activeTodosCount: number;
  filteredTodos: Todo[];
  addTodo: (newTodo: Omit<Todo, 'id'>) => void;
  editTodo: (todo: Partial<Omit<Todo, 'id'>> & { id: string }) => void;
  removeTodo: (id: string) => void;
  removeCompletedTodos: () => void;
  reorderTodos: (srcIndex: number, destIndex: number) => void;
}

export const TodosContext = createContext<State | null>(null);

export function TodosProvider({ children }: { children: ReactNode }) {
  const [isLoading, setLoading] = useState(true);
  const [todos, setTodos] = useState<(Todo & { index: number })[]>([]);
  const router = useRouter();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  /**
   * Adds an index to each item in the array.
   * This index is used for drag-and-reorder functionality.
   *
   * @param {Array} todos - The array of items to which indices will be added.
   * @returns {Array} - The updated array of items with added indices.
   */
  const addIndex = (todos: Todo[]) => todos.map((todo, index) => ({ ...todo, index }));

  //getting the initial data
  useEffect(() => {
    setTodos(addIndex(todosApi.getAll()));
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => {
      if (timeout !== null) clearTimeout(timeout);
    };
  }, []);

  const getAllTodos = useCallback(() => todos, [todos]);

  const getActiveTodos = useCallback(() => todos.filter(({ isCompleted }) => !isCompleted), [todos]);

  const getCompletedTodos = useCallback(() => todos.filter(({ isCompleted }) => isCompleted), [todos]);

  const filteredTodos = useMemo(() => {
    const filter = router.query.filter;
    if (filter === 'active') return getActiveTodos();
    else if (filter === 'completed') return getCompletedTodos();
    return getAllTodos();
  }, [getAllTodos, getActiveTodos, getCompletedTodos, router.query]);

  const addTodo: State['addTodo'] = newTodo => {
    try {
      setTodos(addIndex(todosApi.add(newTodo)));
    } catch (error) {
      if (error instanceof Error) {
        const key = enqueueSnackbar(error.message, {
          autoHideDuration: 10000,
          action: (
            <IconButton onClick={() => closeSnackbar(key)}>
              <CrossIcon
                sx={{
                  width: '14px !important',
                  height: '14px !important',
                  '& path': {
                    fill: 'white !important'
                  }
                }}
              />
            </IconButton>
          )
        });
      }
    }
  };

  const editTodo: State['editTodo'] = todo => {
    setTodos(addIndex([...todosApi.edit(todo)]));
  };

  const removeTodo: State['removeTodo'] = id => {
    setTodos(addIndex(todosApi.remove(id)));
  };

  const removeCompletedTodos = () => {
    setTodos(addIndex(todosApi.removeCompleted()));
  };

  const reorderTodos: State['reorderTodos'] = (srcIndex, destIndex) => {
    const a = filteredTodos[srcIndex].index;
    const b = filteredTodos[destIndex].index;
    setTodos(addIndex(todosApi.reorder(a, b)));
  };

  return (
    <TodosContext.Provider
      value={{
        todosCount: todos.length,
        activeTodosCount: getActiveTodos().length,
        filteredTodos,
        addTodo,
        editTodo,
        removeTodo,
        removeCompletedTodos,
        reorderTodos
      }}
    >
      <Backdrop
        open={isLoading}
        appear={false}
        timeout={500}
        sx={{
          position: 'fixed',
          zIndex: theme => theme.zIndex.appBar,
          background: 'hsl(0, 0%, 98%)',
          userSelect: 'none'
        }}
      >
        <Typography variant='h4'>Loading...</Typography>
      </Backdrop>
      <Fade in={!isLoading} style={{ transitionDelay: '500ms' }}>
        <Box>{children}</Box>
      </Fade>
    </TodosContext.Provider>
  );
}
