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
import Badge from '@mui/material/Badge';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import SwitchAccountOutlinedIcon from '@mui/icons-material/SwitchAccountOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { BadgeContentSpan } from '@/src/components/Header/Header';

const StyledMenuItem = styled(MenuItem)(() => ({
  '& .MuiTypography-root': {
    fontWeight: 400
  }
}));

export default function UserDropDown() {
  const [anchorEl, setAnchorEl] = useState<HTMLSpanElement | null>(null);
  const open = Boolean(anchorEl);

  return (
    <>
      <Badge
        role='button'
        overlap='circular'
        sx={{ ml: 2, cursor: 'pointer' }}
        badgeContent={<BadgeContentSpan />}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        onClick={evt => {
          setAnchorEl(evt.currentTarget);
        }}
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
      >
        <Avatar src='/images/avatars/image-juliusomo.png' alt='your profile picture' />
      </Badge>

      <Menu
        id='account-menu'
        open={open}
        PaperProps={{
          sx: {
            width: '250px',
            mt: 1.5
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
        <MenuItem>
          <ListItemAvatar>
            <Badge
              overlap='circular'
              badgeContent={<BadgeContentSpan />}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
            >
              <Avatar src='/images/avatars/image-juliusomo.png' alt='your profile picture' />
            </Badge>
          </ListItemAvatar>
          <Box
            sx={{
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              whiteSpace: 'pre-wrap'
            }}
          >
            <Typography variant='h2'> juliusomo </Typography>
            <Typography
              variant='subtitle2'
              sx={{
                fontWeight: '400'
              }}
              color='textSecondary'
            >
              juliusomo @info.com
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
        <StyledMenuItem aria-label='Switch to demo users'>
          <ListItemIcon>
            <SwitchAccountOutlinedIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText> Switch to demo users </ListItemText>
        </StyledMenuItem>
        <StyledMenuItem aria-label='Logout'>
          <ListItemIcon>
            <LogoutOutlinedIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText> Logout </ListItemText>
        </StyledMenuItem>
      </Menu>
    </>
  );
}
