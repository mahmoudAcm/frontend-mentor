import useCommentOrReplyContext from '@/src/hooks/useCommentOrReplyContext';
import { Box, Paper, Typography } from '@mui/material';
import Avatar from '@/src/components/MuiAvatar';

export default function Mention({ children }: { children: string }) {
  const { mentions } = useCommentOrReplyContext();
  const userData = mentions.find(mention => mention.user.username === children.slice(1))?.user!;

  if (!userData) return <>{children}</>;

  return (
    <Typography
      component='span'
      color='primary'
      aria-label={`Mentioned user: ${children}`}
      sx={{
        cursor: 'pointer',
        position: 'relative',
        display: 'inline-block',
        '&:hover .user': {
          zIndex: 2,
          opacity: 1
        }
      }}
    >
      {children}
      <Paper
        sx={{
          position: 'absolute',
          bottom: 30,
          p: 1.3,
          pr: 4,
          display: 'flex',
          width: 'max-content',
          alignItems: 'center',
          zIndex: -1,
          opacity: 0,
          transition: theme =>
            theme.transitions.create('opacity', {
              duration: 200
            })
        }}
        className='user'
      >
        <Avatar src={userData.image} alt='user details' />
        <Box sx={{ ml: 1.3 }}>
          <Typography variant='h2'>{userData.username}</Typography>
          <Typography
            variant='subtitle2'
            sx={{
              fontWeight: '400'
            }}
            color='textSecondary'
          >
            {userData.email}
          </Typography>
        </Box>
      </Paper>
    </Typography>
  );
}
