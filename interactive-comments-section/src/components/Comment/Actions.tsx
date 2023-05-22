import { Box, Button } from '@mui/material';
import ReplayIcon from '@/src/icons/Replay';
import DeleteIcon from '@/src/icons/Delete';
import EditIcon from '@/src/icons/Edit';
import { useAppDispatch } from '@/src/store';
import { dialogsActions } from '@/src/slices/dialogs';
import { DIALOGS } from '@/src/constants';
import useCommentOrReplyContext from '@/src/hooks/useCommentOrReplyContext';

export default function Actions() {
  const { type, owner, openEdit, setFormOpening, id } = useCommentOrReplyContext();
  const dispatch = useAppDispatch();

  return (
    <Box
      sx={{
        marginRight: '-8px',
        '& button': {
          textTransform: 'capitalize'
        }
      }}
      role='group'
      aria-label={`${type} actions`}
    >
      {owner ? (
        <>
          <Button
            startIcon={<DeleteIcon />}
            color='secondary'
            sx={{ marginRight: '12px' }}
            aria-label={`delete the ${type}`}
            onClick={() => {
              dispatch(
                dialogsActions.openDialog({
                  dialogId: DIALOGS['DELETE_COMMENTS/DELETE_REPLIES'],
                  details: {
                    id,
                    type: type
                  }
                })
              );
            }}
          >
            Delete
          </Button>
          <Button startIcon={<EditIcon />} aria-label={`edit the ${type}`} onClick={openEdit}>
            Edit
          </Button>
        </>
      ) : (
        <Button
          startIcon={<ReplayIcon />}
          aria-label='reply'
          onClick={() => {
            setFormOpening(prev => !prev);
          }}
        >
          Reply
        </Button>
      )}
    </Box>
  );
}
