import { alpha, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

export default function DeleteDialog() {
  return (
    <Dialog
      open={true}
      maxWidth='xs'
      PaperProps={{
        sx: {
          maxWidth: '400px'
        }
      }}
    >
      <DialogTitle>Delete comment</DialogTitle>
      <DialogContent sx={{ color: theme => theme.palette.text.secondary, fontWeight: '400' }}>
        Are you sure you want to delete this comment? This will remove the comment and can’t be undone.
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
