import { Paper } from '@mui/material';
import VoteButton from '@/src/components/VoteButton';

export default function Comment() {
  return (
    <Paper
      sx={{
        p: '24px',
        width: '730px'
      }}
      elevation={0}
    >
      <VoteButton />
    </Paper>
  );
}
