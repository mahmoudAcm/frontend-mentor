import {
  Avatar,
  Box,
  Divider,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography
} from '@mui/material';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import useAuthContext from '@/src/hooks/useAuthContext';

const StyledMenuItem = styled(MenuItem)(() => ({
  '& .MuiTypography-root': {
    fontWeight: 400
  }
}));

export default function UserDropDown() {
  const [anchorEl, setAnchorEl] = useState<HTMLSpanElement | null>(null);
  const open = Boolean(anchorEl);
  const { user, logout } = useAuthContext();

  return (
    <>
      <span
        role='button'
        style={{ marginLeft: 2, cursor: 'pointer' }}
        onClick={evt => {
          setAnchorEl(evt.currentTarget);
        }}
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
      >
        <Avatar src={user.image} alt='your profile picture' sx={{ width: '37px', height: '37px' }} />
      </span>

      <Menu
        id='account-menu'
        open={open}
        PaperProps={{
          sx: {
            minWidth: '260px',
            mt: 1.5,
            boxShadow: 'var(--shadow)'
          }
        }}
        elevation={2}
        anchorEl={anchorEl}
        keepMounted
        transformOrigin={{
          horizontal: 'right',
          vertical: 'top'
        }}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom'
        }}
        onClose={() => setAnchorEl(null)}
      >
        <span></span>
        <MenuItem>
          <ListItemAvatar>
            <Avatar src={user.image} alt='your profile picture' />
          </ListItemAvatar>
          <Box
            sx={{
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              whiteSpace: 'pre-wrap',
              pr: '5px'
            }}
          >
            <Typography variant='h2'>{user.username}</Typography>
            <Typography
              variant='subtitle2'
              sx={{
                fontWeight: '400'
              }}
              color='textSecondary'
            >
              {user.email}
            </Typography>
          </Box>
          <UnfoldMoreIcon
            sx={{
              ml: 'auto'
            }}
            fontSize='small'
          />
        </MenuItem>
        <Divider />
        <StyledMenuItem
          aria-label='Logout'
          onClick={async () => {
            await logout();
          }}
        >
          <ListItemIcon>
            <LogoutOutlinedIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText> Logout </ListItemText>
        </StyledMenuItem>
      </Menu>
    </>
  );
}
