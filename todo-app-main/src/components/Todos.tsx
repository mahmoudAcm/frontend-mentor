import { Box, styled } from '@mui/material';
import TodosFooter from '@/src/components/TodosFooter';
import Todo from '@/src/components/Todo';

const TodosRoot = styled(Box)(({ theme }) => ({
  borderRadius: 4,
  overflow: 'hidden',
  background: theme.palette.background.paper,
  marginTop: '24px',
  boxShadow: `0px 28px 40px -15px ${theme.palette.__mode === 'DARK' ? 'hsl(240, 21%, 7%)' : 'hsl(240, 0%, 78%)'}`,
  [theme.breakpoints.down('md')]: {
    marginTop: '16px'
  }
}));

export default function Todos() {
  return (
    <TodosRoot>
      {new Array(6).fill(0).map((_, index) => (
        <Todo key={index} />
      ))}
      <TodosFooter />
    </TodosRoot>
  );
}
