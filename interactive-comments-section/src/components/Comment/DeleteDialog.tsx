import { alpha, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import useDialogsSelector from '@/src/hooks/useDialogsSelector';
import { DIALOGS, SOCKET_EVENTS } from '@/src/constants';
import { useAppDispatch } from '@/src/store';
import { dialogsActions } from '@/src/slices/dialogs';
import { commentsOrRepliesActions } from '@/src/slices/commentsOrReplies';
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import useSocketContext from '@/src/hooks/useSocketContext';
import { LoadingButton } from '@mui/lab';
import { useEffect, useRef, useState } from 'react';

const mapTypeToMessage: Record<string, string> = {
  comment: 'comment',
  reply: 'reply',
  repliesParent: 'reply'
};

export default function DeleteDialog() {
  const router = useRouter();
  const {
    [DIALOGS['DELETE_COMMENTS/DELETE_REPLIES']]: { open, details }
  } = useDialogsSelector();
  const dispatch = useAppDispatch();
  const { emit } = useSocketContext();
  const [isSubmitting, setSubmitting] = useState(false);
  const handleCloseTimeoutRef = useRef<any>(null);

  const handleClose = () => dispatch(dialogsActions.closeDialog(DIALOGS['DELETE_COMMENTS/DELETE_REPLIES']));

  const handleDelete = async () => {
    try {
      setSubmitting(true);
      if (details.type !== 'comment') {
        const data = await dispatch(commentsOrRepliesActions.removeReply(details.id, details.type));
        emit(SOCKET_EVENTS.DEL_REPLY, data);
        if (details.id === router.query.id) {
          await router.replace('/');
        }
      } else {
        const data = await dispatch(commentsOrRepliesActions.removeComment(details.id));
        emit(SOCKET_EVENTS.DEL_COMMENT, data);
      }
      handleCloseTimeoutRef.current = setTimeout(handleClose, 500);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.warn(error.response?.data.message);
      }
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    return () => {
      if (handleCloseTimeoutRef.current !== null) clearTimeout(handleCloseTimeoutRef.current);
    };
  }, []);

  return (
    <Dialog
      open={open || isSubmitting}
      maxWidth='xs'
      PaperProps={{
        sx: {
          maxWidth: '400px'
        }
      }}
      onClose={handleClose}
    >
      <DialogTitle>Delete {details.type}</DialogTitle>
      <DialogContent sx={{ color: theme => theme.palette.text.secondary, fontWeight: '400' }}>
        Are you sure you want to delete this {mapTypeToMessage[details.type]}? This will remove the{' '}
        {mapTypeToMessage[details.type]} and can’t be undone.
      </DialogContent>
      <DialogActions
        sx={{
          justifyContent: 'space-between',
          gap: '6px',
          '& button': {
            paddingTop: '12px',
            paddingBottom: '12px'
          }
        }}
      >
        <Button
          variant='contained'
          sx={{
            background: theme => theme.palette.text.secondary,
            '--btn-bg-hover': theme => alpha(theme.palette.text.secondary, 0.7)
          }}
          fullWidth
          onClick={handleClose}
        >
          NO, CANCEL
        </Button>
        <LoadingButton
          loading={isSubmitting}
          startIcon={<></>}
          loadingPosition='start'
          variant='contained'
          color='secondary'
          fullWidth
          onClick={handleDelete}
        >
          YES, DELETE
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}
