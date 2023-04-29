import { Box, Button } from '@mui/material';
import ReplayIcon from '@/src/icons/Replay';
import DeleteIcon from '@/src/icons/Delete';
import EditIcon from '@/src/icons/Edit';

export default function Actions({ owner }: { owner?: boolean }) {
  return (
    <Box
      sx={{
        marginRight: '-8px',
        '& button': {
          textTransform: 'capitalize'
        }
      }}
      role='group'
      aria-label='comment actions'
    >
      {owner ? (
        <>
          <Button
            startIcon={<DeleteIcon />}
            color='secondary'
            sx={{ marginRight: '12px' }}
            aria-label='delete the comment'
          >
            Delete
          </Button>
          <Button startIcon={<EditIcon />} aria-label='edit the comment'>
            Edit
          </Button>
        </>
      ) : (
        <Button startIcon={<ReplayIcon />} aria-label='reply to the comment'>
          Reply
        </Button>
      )}
    </Box>
  );
}
