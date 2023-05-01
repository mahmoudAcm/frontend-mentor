import { alpha, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import useDialogsSelector from '@/src/hooks/useDialogsSelector';
import { DIALOGS } from '@/src/constants';
import { useAppDispatch } from '@/src/store';
import { dialogsActions } from '@/src/slices/dialogs';

export default function DeleteDialog() {
  const {
    [DIALOGS['DELETE_COMMENTS/DELETE_REPLIES']]: { open, details }
  } = useDialogsSelector();
  const dispatch = useAppDispatch();

  const handleClose = () => dispatch(dialogsActions.closeDialog(DIALOGS['DELETE_COMMENTS/DELETE_REPLIES']));

  return (
    <Dialog
      open={open}
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
        Are you sure you want to delete this {details.type}? This will remove the {details.type} and can’t be undone.
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
        <Button variant='contained' color='secondary' fullWidth>
          YES, DELETE
        </Button>
      </DialogActions>
    </Dialog>
  );
}
