import { Box, styled, Typography } from '@mui/material';
import TodosFilter from '@/src/components/TodosFilter';
import Link from 'next/link';
import useTodosContext from '@/src/hooks/useTodosContext';

const TodosFooterRoot = styled('li')(({ theme }) => ({
  padding: '18px 24px',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  background: theme.palette.background.paper
}));

const StyledTypography = styled(Box)(({ theme }) => ({
  fontSize: 13.6 / 16 + 'rem',
  color: theme.palette.__mode === 'DARK' ? 'hsl(238, 14%, 41%)' : 'hsl(250, 3%, 60%)',
  lineHeight: 14 / 13.6,
  fontWeight: 700,
  transition: theme.transitions.create('color'),
  '&:hover:not(.info)': {
    color: theme.palette.__mode === 'DARK' ? 'hsl(230, 64%, 95%)' : 'hsl(237, 10%, 43%)'
  }
}));

export default function TodosFooter() {
  const { todosCount, activeTodosCount, removeAllTodos } = useTodosContext();

  if (!todosCount) return <></>;

  return (
    <TodosFooterRoot tabIndex={-1}>
      <StyledTypography component={Typography} className='info' sx={{ fontWeight: '400 !important', flex: 1 }}>
        {activeTodosCount} items left
      </StyledTypography>
      <TodosFilter media='desktop' />
      <StyledTypography
        component={Link}
        //@ts-ignore
        href='#clear-all'
        onClick={evt => {
          evt.preventDefault();
          removeAllTodos();
        }}
        sx={{
          fontWeight: '400 !important',
          cursor: 'pointer',
          textDecoration: 'none',
          '&:focus': {
            outlineOffset: 8,
            outline: '2px dashed currentColor',
            borderRadius: '0.5px'
          }
        }}
        aria-label='Clear Completed todos'
      >
        Clear Completed
      </StyledTypography>
    </TodosFooterRoot>
  );
}
