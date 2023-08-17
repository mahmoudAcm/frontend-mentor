import { InputBase, styled } from '@mui/material';
import useTodosContext from '@/src/hooks/useTodosContext';
import { useRef, useState } from 'react';
import CheckIcon from '@/src/icons/CheckIcon';

const CreateTodoFormRoot = styled('form')(({ theme }) => ({
  padding: '20px 23px',
  borderRadius: 4,
  background: theme.palette.background.paper,
  display: 'flex',
  alignItems: 'center',
  '--_margin': '-15px',
  [theme.breakpoints.down('md')]: {
    '--_margin': '-10px',
    padding: '14px 20px'
  }
}));

export const CheckBox = styled('label')(({ theme }) => ({
  width: '26px',
  height: '26px',
  borderRadius: '50%',
  border: '1px solid transparent',
  borderColor: theme.palette.__mode === 'DARK' ? 'hsl(235, 19%, 23%)' : 'hsl(233, 17%, 94%)',
  marginRight: '21px',
  transition: theme.transitions.create('background-image'),
  backgroundSize: '31px 27px',
  backgroundPosition: '-1px',
  overflow: 'hidden',
  position: 'relative',
  cursor: 'pointer',
  display: 'grid',
  placeItems: 'center',
  '& .checkIcon': {
    display: 'none'
  },
  '&:hover': {
    borderColor: 'transparent',
    backgroundImage: 'linear-gradient(120deg, #57DDFF 0%, #CB58F3 100%, rgba(217, 217, 217, 0.00) 100%);',
    '&::after': {
      content: '" "',
      position: 'absolute',
      inset: 0,
      background: theme.palette.background.paper,
      zIndex: 1
    }
  },
  '&.checked': {
    backgroundImage: 'linear-gradient(120deg, #57DDFF 0%, #CB58F3 100%, rgba(217, 217, 217, 0.00) 100%)',
    borderColor: 'transparent',
    '& .checkIcon': {
      display: 'inline-flex'
    },
    '&::after': {
      background: 'transparent !important'
    }
  },
  [theme.breakpoints.down('md')]: {
    width: '20px',
    height: '20px'
  }
}));

const Input = styled(InputBase)(({ theme }) => ({
  fontSize: 18.1 / 16 + 'rem',
  fontWeight: 400,
  lineHeight: 'normal',
  letterSpacing: '-0.272px',
  marginTop: 'var(--_margin)',
  marginBottom: 'var(--_margin)',
  paddingTop: 'calc(-1 * var(--_margin))',
  paddingBottom: 'calc(-1 * var(--_margin))',
  flex: 1,
  '& input': {
    padding: 0,
    height: 'auto',
    color: theme.palette.__mode === 'DARK' ? 'hsl(235, 33%, 85%)' : 'hsl(250, 3%, 39%)',
    '&::placeholder': {
      color: theme.palette.__mode === 'DARK' ? 'hsl(235, 10%, 52%)' : 'hsl(250, 4%, 69%)',
      opacity: 1
    }
  },
  [theme.breakpoints.down('md')]: {
    fontSize: 12.032 / 16 + 'rem',
    lineHeight: 11.301 / 12.032,
    letterSpacing: '-0.18px'
  }
}));

export default function CreateTodoForm() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [checked, setChecked] = useState(false);
  const { addTodo } = useTodosContext();

  return (
    <CreateTodoFormRoot
      onSubmit={event => {
        event.preventDefault();
        const input = inputRef.current;
        if (input?.value && !input.value.match(/^\s*$/)) {
          addTodo({ isCompleted: checked, title: input.value });
          input.value = '';
          setChecked(false);
        }
      }}
    >
      <CheckBox className={checked ? 'checked' : undefined}>
        <input
          hidden
          type='checkbox'
          checked={checked}
          onChange={() => {
            setChecked(!checked);
            inputRef.current?.focus();
          }}
        />
        <CheckIcon className='checkIcon' />
      </CheckBox>
      <Input placeholder='Create a new todo...' inputRef={inputRef} />
    </CreateTodoFormRoot>
  );
}
