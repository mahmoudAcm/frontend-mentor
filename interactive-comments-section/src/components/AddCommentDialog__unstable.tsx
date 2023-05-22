import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import Form from '@/src/components/Comment/Form';
import useDialogsSelector from '@/src/hooks/useDialogsSelector';
import { DIALOGS } from '@/src/constants';
import { useDispatch } from 'react-redux';
import { dialogsActions } from '@/src/slices/dialogs';
import useAuthContext from '@/src/hooks/useAuthContext';

export default function AddCommentDialog__unstable() {
  const {
    [DIALOGS.ADD_COMMENT]: { open }
  } = useDialogsSelector();
  const { user } = useAuthContext();
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(dialogsActions.closeDialog(DIALOGS.ADD_COMMENT));
  };

  return (
    <Dialog open={open} maxWidth='md' fullWidth onClose={handleClose}>
      <DialogTitle>Add a comment</DialogTitle>
      <DialogContent>
        <Form
          type='comment'
          placeholder={`What are you thinking about ${user.username}?`}
          sx={{ paddingLeft: '0 !important', paddingRight: '0 !important' }}
          onSubmit={handleClose}
        />
      </DialogContent>
    </Dialog>
  );
}
