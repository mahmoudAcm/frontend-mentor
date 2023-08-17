import { Box, styled } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTodosContext from '@/src/hooks/useTodosContext';

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

const FilterButton = styled(Link)(({ theme }) => ({
  fontSize: 13.6 / 16 + 'rem',
  color: theme.palette.__mode === 'DARK' ? 'hsl(238, 14%, 41%)' : 'hsl(250, 3%, 60%)',
  lineHeight: 14 / 13.6,
  fontWeight: 700,
  transition: theme.transitions.create('color'),
  textDecoration: 'none',
  '&:hover:not(.info)': {
    color: theme.palette.__mode === 'DARK' ? 'hsl(230, 64%, 95%)' : 'hsl(237, 10%, 43%)'
  },
  cursor: 'pointer',
  '&.active': {
    color: 'hsl(220, 98%, 61%) !important'
  },
  '&:focus': {
    outlineOffset: 8,
    outline: '2px dashed currentColor',
    borderRadius: '0.5px'
  }
}));

export default function TodosFilter({ media }: { media: 'desktop' | 'mobile' }) {
  const { todosCount } = useTodosContext();
  const router = useRouter();
  const hash = router.asPath.split('#')[1] ?? '';

  if (!todosCount) return <></>;

  return (
    <TodosFilterRoot className={`todosFilter-${media}`}>
      <FilterButton
        className={!['active', 'completed'].includes(hash) ? 'active' : undefined}
        href='#all'
        aria-label='get all todos'
      >
        All
      </FilterButton>
      <FilterButton className={hash === 'active' ? 'active' : undefined} href='#active' aria-label='get active todos'>
        Active
      </FilterButton>
      <FilterButton
        className={hash === 'completed' ? 'active' : undefined}
        href='#completed'
        aria-label='get completed todos'
      >
        Completed
      </FilterButton>
    </TodosFilterRoot>
  );
}
