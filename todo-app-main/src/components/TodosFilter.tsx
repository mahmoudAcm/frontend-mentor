import { Box, styled, Typography } from '@mui/material';

const TodosFilterRoot = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: 21,
  marginRight: 58,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    marginTop: 16,
    padding: '17px 10px',
    borderRadius: 4,
    '&.todosFilter-desktop': {
      display: 'none'
    }
  },
  [theme.breakpoints.up('sm')]: {
    '&.todosFilter-mobile': {
      display: 'none'
    }
  }
}));

const FilterButton = styled(Typography)(({ theme }) => ({
  fontSize: 13.6 / 16 + 'rem',
  color: theme.palette.__mode === 'DARK' ? 'hsl(238, 14%, 41%)' : 'hsl(250, 3%, 60%)',
  lineHeight: 14 / 13.6,
  fontWeight: 700,
  transition: theme.transitions.create('color'),
  '&:hover:not(.info)': {
    color: theme.palette.__mode === 'DARK' ? 'hsl(230, 64%, 95%)' : 'hsl(237, 10%, 43%)'
  },
  cursor: 'pointer'
}));

export default function TodosFilter({ media }: { media: 'desktop' | 'mobile' }) {
  return (
    <TodosFilterRoot className={`todosFilter-${media}`}>
      <FilterButton sx={{ color: 'hsl(220, 98%, 61%) ' }}>All</FilterButton>
      <FilterButton>Active</FilterButton>
      <FilterButton>Completed</FilterButton>
    </TodosFilterRoot>
  );
}
