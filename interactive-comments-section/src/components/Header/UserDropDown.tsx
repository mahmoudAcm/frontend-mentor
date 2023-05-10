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
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { BadgeContentSpan } from '@/src/components/Header/Header';
import { useRouter } from 'next/router';

const StyledMenuItem = styled(MenuItem)(() => ({
  '& .MuiTypography-root': {
    fontWeight: 400
  }
}));

export default function UserDropDown() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<HTMLSpanElement | null>(null);
  const open = Boolean(anchorEl);

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
        <Avatar src='/images/avatars/image-juliusomo.png' alt='your profile picture' />
      </span>

      <Menu
        id='account-menu'
        open={open}
        PaperProps={{
          sx: {
            width: '260px',
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
            <Typography variant='h2'>juliusomo</Typography>
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
        <StyledMenuItem
          aria-label='Logout'
          onClick={async () => {
            await router.replace('/demo');
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
