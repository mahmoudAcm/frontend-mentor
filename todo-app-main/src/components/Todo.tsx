import { Box, IconButton, styled, Typography } from '@mui/material';
import { useState } from 'react';
import CrossIcon from '@/src/icons/CrossIcon';
import CheckIcon from '@/src/icons/CheckIcon';

const TodoRoot = styled(Box)(({ theme }) => ({
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
  [theme.breakpoints.down('md')]: {
    padding: '14px 20px'
  }
}));

const CheckBox = styled('label')(({ theme }) => ({
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
  [theme.breakpoints.down('md')]: {
    width: '20px',
    height: '20px'
  }
}));

const TodoTitle = styled(Typography)(({ theme }) => ({
  fontSize: 18.1 / 16 + 'rem',
  fontWeight: 400,
  lineHeight: 16 / 18.1,
  letterSpacing: '-0.272px',
  color: theme.palette.__mode === 'DARK' ? 'hsl(235, 18%, 75%)' : 'hsl(235, 19%, 35%)',
  flex: 1,
  cursor: 'pointer',
  [theme.breakpoints.down('md')]: {
    fontSize: 12.032 / 16 + 'rem',
    lineHeight: 11.301 / 12.032,
    letterSpacing: '-0.18px'
  }
}));

const RemoveButton = styled(IconButton)(({ theme }) => ({
  margin: -8,
  display: 'none',
  [theme.breakpoints.down('md')]: {
    '& svg': {
      width: '12px !important'
    }
  }
}));

export default function Todo() {
  const [checked, setChecked] = useState(false);

  return (
    <TodoRoot className={checked ? 'checked' : undefined} onClick={() => setChecked(prevState => !prevState)}>
      <CheckBox className='checkbox'>
        <input
          hidden
          type='checkbox'
          checked={checked}
          onChange={() => {
            setChecked(prevState => !prevState);
          }}
        />
        <CheckIcon className='checkIcon' />
      </CheckBox>
      <TodoTitle className='title'>Jog around the park 3x</TodoTitle>
      <RemoveButton
        aria-label='remove todo'
        className='crossIcon'
        onClick={evt => {
          evt.stopPropagation();
        }}
      >
        <CrossIcon />
      </RemoveButton>
    </TodoRoot>
  );
}
