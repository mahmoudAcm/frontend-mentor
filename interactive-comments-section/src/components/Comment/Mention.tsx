import useCommentOrReplyContext from '@/src/hooks/useCommentOrReplyContext';
import { Box, Paper, Popover, Typography } from '@mui/material';
import Avatar from '@/src/components/MuiAvatar';
import { MouseEvent, useState } from 'react';

export default function Mention({ children }: { children: string }) {
  const { mentions } = useCommentOrReplyContext();
  const userData = mentions.find(mention => mention.user.username === children.slice(1))?.user!;
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const open = Boolean(anchorEl);

  const handlePopoverOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  if (!userData) return <>{children}</>;

  return (
    <Typography
      component='span'
      color='primary'
      aria-label={`Mentioned user: ${children}`}
      sx={{
        cursor: 'pointer',
        display: 'inline-block'
      }}
      aria-owns={open ? 'mouse-over-popover' : undefined}
      aria-haspopup='true'
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
    >
      {children}
      <Popover
        id='mouse-over-popover'
        sx={{
          pointerEvents: 'none'
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
        keepMounted
      >
        <Paper
          sx={{
            p: 1.3,
            pr: 4,
            display: 'flex',
            minWidth: '100px',
            alignItems: 'center'
          }}
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
      </Popover>
    </Typography>
  );
}
