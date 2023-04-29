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

export default function VoteButton() {
  return (
    <VoteButtonRoot role='button' aria-label='vote button'>
      <IconButton aria-label='upvote'>
        <PlusIcon />
      </IconButton>
      <Typography sx={{ lineHeight: 1.1875 }} color='primary'>
        12
      </Typography>
      <IconButton sx={{ height: '27px' }} aria-label='downvote'>
        <MinusIcon />
      </IconButton>
    </VoteButtonRoot>
  );
}
