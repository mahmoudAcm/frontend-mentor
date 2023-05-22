import { Box, Typography } from '@mui/material';
import { DIALOGS } from '@/src/constants';
import { useAppDispatch } from '@/src/store';
import { dialogsActions } from '@/src/slices/dialogs';
import { SecondaryLayout, StyledButton, Title } from '@/src/components/SecondaryLayout';
import useCommentsOrRepliesSelector from '@/src/hooks/useCommentsOrRepliesSelector';

export default function Empty() {
  const dispatch = useAppDispatch();
  const { isFetching } = useCommentsOrRepliesSelector();

  const showCommentDialog = () => {
    dispatch(dialogsActions.openDialog(DIALOGS.ADD_COMMENT));
  };

  if (isFetching) return <></>;

  return (
    <Box
      sx={{
        width: 'min(100%, 565.13px)',
        m: 'auto',
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      <SecondaryLayout>
        <Title>Start by adding a comment</Title>
        <Typography
          sx={{
            mb: '33px',
            color: 'text.secondary',
            fontWeight: 400,
            fontSize: '1.0625rem'
          }}
        >
          Adding a comment makes collaboration easier. Share your thoughts and insights with the people who need them
          and find comments where you need them.
        </Typography>
        <StyledButton variant='contained' onClick={showCommentDialog} aria-label='add a comment'>
          Add a comment
        </StyledButton>
      </SecondaryLayout>
    </Box>
  );
}
