import { Box, IconButton, styled, Typography } from '@mui/material';
import PlusIcon from '@/src/icons/Plus';
import MinusIcon from '@/src/icons/Minus';

const VoteButtonRoot = styled(Box)(({ theme }) => ({
  minWidth: '40px',
  height: '100px',
  background: 'var(--vary-light-gray)',
  borderRadius: '10px',
  padding: '4px 5px 8.34px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  '& svg': {
    cursor: 'pointer'
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'row',
    minWidth: '100px',
    height: '40px',
    padding: '10px 4px 11px 7.58px'
  }
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  '&:hover path': {
    fill: theme.palette.primary.main
  }
}));

export default function VoteButton({ votes }: { votes: number }) {
  return (
    <VoteButtonRoot role='button' aria-label='vote button'>
      <StyledIconButton aria-label='upvote'>
        <PlusIcon />
      </StyledIconButton>
      <Typography sx={{ lineHeight: 1.1875 }} color='primary' aria-label={`votes: ${votes}`}>
        {votes ?? 0}
      </Typography>
      <StyledIconButton sx={{ height: '27px' }} aria-label='downvote'>
        <MinusIcon />
      </StyledIconButton>
    </VoteButtonRoot>
  );
}
