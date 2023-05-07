import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/NotificationsNone';
import TranslateIcon from '@mui/icons-material/Translate';
import { Avatar, Tooltip } from '@mui/material';
import { colors } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: 'auto',
  width: '100%',
  marginLeft: '-16px',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
    marginLeft: '-24px'
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& *::placeholder': {
    color: theme.palette.text.secondary,
    fontWeight: '400'
  },
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  }
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'flex-end',
  border: '1px solid var(--light-gray)',
  margin: '24px',
  borderRadius: '8px',
  background: theme.palette.background.paper,
  [theme.breakpoints.down('sm')]: {
    margin: '16px'
  }
}));

const BadgeContentSpan = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.light,
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
}));

export default function Header() {
  return (
    <AppBar color='transparent' elevation={0}>
      <StyledToolbar>
        <Search>
          <SearchIconWrapper sx={{ color: colors.grey[500] }}>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder='Search…' inputProps={{ 'aria-label': 'search' }} />
        </Search>
        <Tooltip title='Switch Language' arrow>
          <IconButton aria-label='switch language' sx={{ color: colors.grey[500] }}>
            <TranslateIcon fontSize='small' />
          </IconButton>
        </Tooltip>
        <Tooltip title='Show 17 new notifications' arrow>
          <IconButton aria-label='show 17 new notifications' sx={{ color: colors.grey[500] }}>
            <Badge badgeContent={17} color='error'>
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Tooltip>
        <Badge
          overlap='circular'
          sx={{ ml: 2, cursor: 'pointer' }}
          badgeContent={<BadgeContentSpan />}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
        >
          <Avatar src='/images/avatars/image-juliusomo.png' />
        </Badge>
      </StyledToolbar>
    </AppBar>
  );
}
