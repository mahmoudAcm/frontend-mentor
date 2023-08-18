import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { Todo, todosApi } from '@/src/todosApi';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { Backdrop, Box, Fade, IconButton, Typography } from '@mui/material';
import CrossIcon from '@/src/icons/CrossIcon';

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
  const [isLoading, setLoading] = useState(true);
  const [todos, setTodos] = useState<Todo[]>([]);
  const router = useRouter();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  //getting the initial data
  useEffect(() => {
    setTodos(todosApi.getAll());
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

  const getAll = useCallback(() => {
    const hash = router.asPath.split('#')[1] ?? '';
    if (hash === 'active') return getActiveTodos();
    else if (hash === 'completed') return getCompletedTodos();
    return getAllTodos();
  }, [getAllTodos, getActiveTodos, getCompletedTodos, router.asPath]);

  const addTodo: State['addTodo'] = newTodo => {
    try {
      setTodos(todosApi.add(newTodo));
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
