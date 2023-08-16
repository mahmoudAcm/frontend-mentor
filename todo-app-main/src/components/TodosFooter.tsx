import { Box, styled } from '@mui/material';
import TodosFilter from '@/src/components/TodosFilter';

const TodosFooterRoot = styled(Box)(({ theme }) => ({
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
  return (
    <TodosFooterRoot>
      <StyledTypography fontWeight='400 !important' className='info' sx={{ flex: 1 }}>
        5 items left
      </StyledTypography>
      <TodosFilter media='desktop' />
      <StyledTypography fontWeight='400 !important' sx={{ cursor: 'pointer' }}>
        Clear Completed
      </StyledTypography>
    </TodosFooterRoot>
  );
}
