import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import Form from '@/src/components/Comment/Form';
import useDialogsSelector from '@/src/hooks/useDialogsSelector';
import { DIALOGS } from '@/src/constants';
import { useDispatch } from 'react-redux';
import { dialogsActions } from '@/src/slices/dialogs';

export default function AddCommentDialog__unstable() {
  const {
    [DIALOGS.ADD_COMMENT]: { open }
  } = useDialogsSelector();
  const dispatch = useDispatch();

  return (
    <Dialog
      open={open}
      maxWidth='md'
      fullWidth
      onClose={() => {
        dispatch(dialogsActions.closeDialog(DIALOGS.ADD_COMMENT));
      }}
    >
      <DialogTitle>Add a comment</DialogTitle>
      <DialogContent>
        <Form
          type='comment'
          placeholder='What are you thinking about juliusomo?'
          sx={{ paddingLeft: '0 !important', paddingRight: '0 !important' }}
        />
      </DialogContent>
    </Dialog>
  );
}
