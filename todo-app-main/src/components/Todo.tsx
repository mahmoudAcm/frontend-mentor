import { alpha, IconButton, styled, Typography } from '@mui/material';
import { Ref, useState } from 'react';
import CrossIcon from '@/src/icons/CrossIcon';
import CheckIcon from '@/src/icons/CheckIcon';
import useTodosContext from '@/src/hooks/useTodosContext';
import { CheckBox } from '@/src/components/CreateTodoForm';

const TodoRoot = styled('li')(({ theme }) => ({
  position: 'relative',
  padding: '20px 23px',
  background: theme.palette.background.paper,
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid transparent',
  borderBottomColor: theme.palette.divider,
  userSelect: 'none',
  '&:hover': {
    '& .crossIcon': {
      display: 'inline-flex'
    }
  },
  '&.checked': {
    '& .checkbox': {
      backgroundImage: 'linear-gradient(120deg, #57DDFF 0%, #CB58F3 100%, rgba(217, 217, 217, 0.00) 100%)',
      borderColor: 'transparent',
      '& .checkIcon': {
        display: 'inline-flex'
      },
      '&::after': {
        background: 'transparent !important'
      }
    },
    '& .title': {
      color: theme.palette.__mode === 'DARK' ? 'hsl(235, 13%, 34%)' : 'hsl(233, 11%, 84%)',
      textDecoration: 'line-through'
    }
  },
  '&:focus': {
    outline: 'none',
    '& .crossIcon': {
      display: 'inline-flex'
    },
    background: alpha(theme.palette.background.default, theme.palette.__mode === 'DARK' ? 0.2 : 0.9)
  },
  [theme.breakpoints.down('md')]: {
    padding: '16px 20px'
  }
}));

const TodoTitle = styled(Typography)(({ theme }) => ({
  fontSize: 18.1 / 16 + 'rem',
  fontWeight: 400,
  lineHeight: 1.6,
  letterSpacing: -0.416,
  color: theme.palette.__mode === 'DARK' ? 'hsl(235, 18%, 75%)' : 'hsl(235, 19%, 35%)',
  flex: 1,
  cursor: 'pointer',
  wordBreak: 'break-word',
  whiteSpace: 'pre-wrap',
  paddingRight: 29,
  marginTop: -2,
  marginBottom: -4,
  [theme.breakpoints.down('md')]: {
    fontSize: 12 / 16 + 'rem',
    letterSpacing: -0.18
  }
}));

const RemoveButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  position: 'absolute',
  right: '-8px',
  marginRight: '23px',
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
    marginRight: '20px',
    '& svg': {
      width: '12px !important',
      height: '12px !important'
    }
  }
}));

interface TodoProps {
  id: string;
  title: string;
  isCompleted: boolean;
  todoRef: Ref<HTMLLIElement>;
}

export default function Todo(props: TodoProps) {
  const [checked, setChecked] = useState(props.isCompleted);
  const { removeTodo, editTodo } = useTodosContext();

  const handleTodoCheck = () => {
    editTodo({ id: props.id, isCompleted: !checked });
    setChecked(!checked);
  };

  return (
    <TodoRoot
      className={checked ? 'checked' : undefined}
      onClick={handleTodoCheck}
      onKeyDown={evt => {
        if (evt.key === 'Enter') handleTodoCheck();
      }}
      role='listitem'
      tabIndex={-1}
      ref={props.todoRef}
    >
      <CheckBox className='checkbox' onClick={event => event.preventDefault()}>
        <input
          hidden
          type='checkbox'
          checked={checked}
          onChange={event => {
            const newVal = event.target.checked;
            setChecked(newVal);
          }}
        />
        <CheckIcon className='checkIcon' />
      </CheckBox>
      <TodoTitle className='title'>{props.title}</TodoTitle>
      <RemoveButton
        aria-label='remove todo'
        className='crossIcon'
        onClick={evt => {
          evt.stopPropagation();
          removeTodo(props.id);
        }}
        tabIndex={0}
      >
        <CrossIcon />
      </RemoveButton>
    </TodoRoot>
  );
}
