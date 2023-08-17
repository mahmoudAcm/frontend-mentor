import { Box, ClickAwayListener, styled } from '@mui/material';
import TodosFooter from '@/src/components/TodosFooter';
import Todo from '@/src/components/Todo';
import { KeyboardEvent, useRef } from 'react';
import useTodosContext from '@/src/hooks/useTodosContext';
import TodosFilter from '@/src/components/TodosFilter';

const TodosRoot = styled(Box)(({ theme }) => ({
  borderRadius: 4,
  overflow: 'hidden',
  background: theme.palette.background.paper,
  marginTop: '24px',
  boxShadow: `0px 28px 40px -15px ${theme.palette.__mode === 'DARK' ? 'hsl(240, 21%, 7%)' : 'hsl(240, 0%, 78%)'}`,
  '&:focus': {
    outline: '2px dashed hsl(220, 98%, 61%)',
    outlineOffset: 6
  },
  [theme.breakpoints.down('md')]: {
    marginTop: '16px'
  }
}));

export default function Todos() {
  const items = useRef<(HTMLLIElement | null)[]>([]);
  const activeTodoIndex = useRef(-1);
  const { activeTodosCount, getAll } = useTodosContext();

  const todos = getAll();

  items.current = new Array(activeTodosCount).fill(null);

  const handleKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === 'ArrowDown' || evt.key === 'ArrowUp') {
      evt.preventDefault();
      resetActiveIndex();

      activeTodoIndex.current += evt.key === 'ArrowDown' ? 1 : -1;
      if (activeTodoIndex.current >= todos.length) activeTodoIndex.current = 0;
      else if (activeTodoIndex.current < 0) activeTodoIndex.current = todos.length - 1;

      const item = items.current[activeTodoIndex.current];
      item?.setAttribute('tabindex', '0');
      item?.focus();
    }
  };

  const resetActiveIndex = () => {
    if (activeTodoIndex.current === -1) return;
    const item = items.current[activeTodoIndex.current];
    item?.setAttribute('tabindex', '-1');
    item?.blur();
  };

  const handleResetActiveIndex = () => {
    resetActiveIndex();
    activeTodoIndex.current = -1;
  };

  return (
    <>
      <ClickAwayListener onClickAway={handleResetActiveIndex}>
        <TodosRoot
          onMouseMove={handleResetActiveIndex}
          onKeyDown={handleKeyDown}
          role='list'
          aria-label='List of Todos'
          tabIndex={0}
        >
          {todos.map((todo, index) => (
            <Todo {...todo} key={todo.id} todoRef={el => (items.current[index] = el)} />
          ))}
          <TodosFooter />
        </TodosRoot>
      </ClickAwayListener>
      <TodosFilter media='mobile' />
    </>
  );
}
