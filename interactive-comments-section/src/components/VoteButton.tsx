import { Box, IconButton, styled, Typography } from '@mui/material';
import PlusIcon from '@/src/icons/Plus';
import MinusIcon from '@/src/icons/Minus';
import useCommentOrReplyContext from '@/src/hooks/useCommentOrReplyContext';
import { useAppDispatch } from '@/src/store';
import { commentsOrRepliesActions } from '@/src/slices/commentsOrReplies';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { SOCKET_EVENTS } from '@/src/constants';
import useSocketContext from '@/src/hooks/useSocketContext';

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
  '&:hover path, &.voted path': {
    fill: theme.palette.primary.main
  }
}));

export default function VoteButton() {
  const { votes, score, type, id, parentId } = useCommentOrReplyContext();
  const dispatch = useAppDispatch();
  const { emit, notify } = useSocketContext();

  const vote = (amount: -1 | 1) => async () => {
    const toastId = toast('voting...', {
      isLoading: true
    });
    try {
      const data = await dispatch(commentsOrRepliesActions.vote(notify, id, type, amount, score, parentId!));
      emit(SOCKET_EVENTS.VOTE, data);
      toast.update(toastId, {
        type: 'success',
        isLoading: false,
        render: 'your vote has been applied',
        autoClose: 5000
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.update(toastId, {
          type: 'warning',
          isLoading: false,
          autoClose: 5000,
          render: error.response?.data.message
        });
      }
    }
  };

  return (
    <VoteButtonRoot role='button' aria-label='vote button'>
      <StyledIconButton
        aria-label='upvote'
        onClick={vote(1)}
        className={votes.length && votes[0].amount == 1 ? 'voted' : undefined}
      >
        <PlusIcon />
      </StyledIconButton>
      <Typography sx={{ lineHeight: 1.1875 }} color='primary' aria-label={`votes: ${score}`}>
        {score ?? 0}
      </Typography>
      <StyledIconButton
        aria-label='downvote'
        onClick={vote(-1)}
        sx={{
          height: '27px'
        }}
        className={votes.length && votes[0].amount == -1 ? 'voted' : undefined}
      >
        <MinusIcon />
      </StyledIconButton>
    </VoteButtonRoot>
  );
}
