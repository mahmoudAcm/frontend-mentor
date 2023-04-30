import { Box, Button } from '@mui/material';
import ReplayIcon from '@/src/icons/Replay';
import DeleteIcon from '@/src/icons/Delete';
import EditIcon from '@/src/icons/Edit';

interface ActionsProps {
  owner?: boolean;
  type: 'comment' | 'reply';
}

export default function Actions(props: ActionsProps) {
  return (
    <Box
      sx={{
        marginRight: '-8px',
        '& button': {
          textTransform: 'capitalize'
        }
      }}
      role='group'
      aria-label={`${props.type} actions`}
    >
      {props.owner ? (
        <>
          <Button
            startIcon={<DeleteIcon />}
            color='secondary'
            sx={{ marginRight: '12px' }}
            aria-label={`delete the ${props.type}`}
          >
            Delete
          </Button>
          <Button startIcon={<EditIcon />} aria-label={`edit the ${props.type}`}>
            Edit
          </Button>
        </>
      ) : (
        <Button startIcon={<ReplayIcon />} aria-label='reply'>
          Reply
        </Button>
      )}
    </Box>
  );
}
