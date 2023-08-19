import { Box, ClickAwayListener, styled } from '@mui/material';
import TodosFooter from '@/src/components/TodosFooter';
import Todo from '@/src/components/Todo';
import { KeyboardEvent, useRef } from 'react';
import useTodosContext from '@/src/hooks/useTodosContext';
import TodosFilter from '@/src/components/TodosFilter';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const TodosRoot = styled(Box)(({ theme }) => ({
  borderRadius: 4,
  overflow: 'hidden',
  background: theme.palette.background.paper,
  marginTop: '24px',
  boxShadow: `0px 29px 50px -10px ${theme.palette.__mode === 'DARK' ? 'hsl(240, 21%, 7%)' : 'hsl(250, 14%, 91%)'}`,
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
  const { activeTodosCount, filteredTodos, reorderTodos } = useTodosContext();

  items.current = new Array(activeTodosCount).fill(null);

  const handleKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === 'ArrowDown' || evt.key === 'ArrowUp') {
      evt.preventDefault();
      resetActiveIndex();

      activeTodoIndex.current += evt.key === 'ArrowDown' ? 1 : -1;
      if (activeTodoIndex.current >= filteredTodos.length) activeTodoIndex.current = 0;
      else if (activeTodoIndex.current < 0) activeTodoIndex.current = filteredTodos.length - 1;

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
    <DragDropContext
      onDragEnd={result => {
        if (!result.destination || result.destination.index === result.source.index) return;
        reorderTodos(result.source.index, result.destination.index);
      }}
    >
      <ClickAwayListener onClickAway={handleResetActiveIndex}>
        <Droppable droppableId='column-1'>
          {provided => {
            return (
              <TodosRoot
                ref={provided.innerRef}
                {...provided.droppableProps}
                onMouseMove={handleResetActiveIndex}
                onKeyDown={handleKeyDown}
                role='list'
                aria-label='List of Todos'
                tabIndex={0}
              >
                {filteredTodos.map((todo, index) => (
                  <Draggable key={todo.id} draggableId={todo.id} index={index}>
                    {(provided, snapshot) => (
                      <Todo
                        {...todo}
                        {...provided}
                        isDragging={snapshot.isDragging && !snapshot.isDropAnimating}
                        todoRef={el => {
                          items.current[index] = el;
                          provided.innerRef(el);
                        }}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
                <TodosFooter />
              </TodosRoot>
            );
          }}
        </Droppable>
      </ClickAwayListener>
      <TodosFilter media='mobile' />
    </DragDropContext>
  );
}
