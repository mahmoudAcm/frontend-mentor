'use client';

import LogoIcon from '@/src/icons/LogoIcon';
import Link from 'next/link';
import { Avatar, Box, Drawer, IconButton, styled, useMediaQuery, useTheme } from '@mui/material';
import CartIcon from '@/src/icons/CartIcon';
import MenuIcon from '@/src/icons/MenuIcon';
import Cart from '@/src/app/(Cart)/Cart';
import { MouseEvent, useEffect, useState } from 'react';
import CloseIcon from '@/src/icons/CloseIcon';

const HeaderRoot = styled('header')(({ theme }) => ({
  paddingLeft: 24,
  paddingRight: 24,
  position: 'sticky',
  top: 0,
  background: 'white',
  zIndex: theme.zIndex.appBar
}));

const Toolbar = styled(Box)(({ theme }) => ({
  maxWidth: 1110,
  display: 'flex',
  margin: 'auto',
  paddingTop: 29,
  paddingBottom: 33,
  borderBottom: '1px solid hsl(240, 5%, 91%)',
  [theme.breakpoints.down('lg')]: {
    border: 'none'
  },
  [theme.breakpoints.down('md')]: {
    padding: '20px 0 24px',
    alignItems: 'center'
  }
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  padding: '9px 9px 10px',
  margin: '-5px 7px -5px -9px',
  [theme.breakpoints.down('md')]: {
    display: 'inline-flex'
  }
}));

const Logo = styled(LogoIcon)(({ theme }) => ({
  marginTop: 14,
  [theme.breakpoints.down('md')]: {
    marginTop: -3
  }
}));

const Nav = styled('nav')(() => ({
  display: 'flex',
  flex: 1
}));

const List = styled('ul')(({ theme }) => ({
  display: 'flex',
  gap: 32,
  listStyle: 'none',
  padding: 0,
  marginTop: 12,
  marginLeft: 56,
  [theme.breakpoints.down('md')]: {
    display: 'none',
    '&.drawer': {
      display: 'grid',
      gap: 19,
      marginTop: 42,
      marginLeft: 25
    }
  }
}));

const Item = styled('li')(({ theme }) => ({
  fontSize: 15.19 / 16 + 'rem',
  lineHeight: 1.5,
  color: 'hsl(218, 4%, 43%)',
  position: 'relative',
  '&.drawer-item': {
    fontSize: 17.72 / 16 + 'rem',
    fontWeight: 700,
    color: 'hsl(220, 9%, 7%)',
    '& a:focus': {
      outlineOffset: 6,
      outline: '2px dotted hsl(25, 99%, 56%)',
      borderRadius: 1
    }
  },
  '& a': {
    font: 'inherit',
    lineHeight: 'inherit',
    textDecoration: 'none',
    color: 'currentColor'
  },
  '&:not(.drawer-item) a': {
    '&::after': {
      content: '" "',
      transform: 'scaleX(0)',
      width: '100%',
      height: 4,
      position: 'absolute',
      left: 0,
      bottom: '-215%',
      background: 'hsl(25, 99%, 56%)',
      transition: theme.transitions.create('transform', {
        duration: 200
      })
    }
  },
  '&:not(.drawer-item) a:hover, &:not(.drawer-item) a:focus': {
    color: 'hsl(200, 9%, 7%)',
    outline: 'none',
    '&::after': {
      transition: theme.transitions.create('transform'),
      transform: 'scaleX(1)'
    }
  }
}));

const Actions = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 38,
  marginLeft: 'auto',
  [theme.breakpoints.down('md')]: {
    gap: 14
  }
}));

const CartButton = styled(IconButton)(({ theme }) => ({
  padding: '9px 8px',
  [theme.breakpoints.down('md')]: {
    marginTop: -7,
    marginBottom: -7
  }
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 50,
  height: 50,
  cursor: 'pointer',
  border: '2px solid transparent',
  '&:hover,&:focus': {
    outline: 'none',
    borderColor: 'hsl(25, 99%, 56%)'
  },
  [theme.breakpoints.down('md')]: {
    width: 24,
    height: 24,
    borderWidth: 1
  }
}));

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(() => theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const handleCartClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const onCartClose = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!isMobile) handleClose();
  }, [isMobile]);

  const list = (type?: 'drawer') => {
    const listClasName = type === 'drawer' ? type : undefined;
    const itemClassName = type === 'drawer' ? 'drawer-item' : undefined;

    return (
      <List className={listClasName}>
        <Item className={itemClassName}>
          <Link href='/collections'>Collections</Link>
        </Item>
        <Item className={itemClassName}>
          <Link href='/men'>Men</Link>
        </Item>
        <Item className={itemClassName}>
          <Link href='/women'>Women</Link>
        </Item>
        <Item className={itemClassName}>
          <Link href='/about'>About</Link>
        </Item>
        <Item className={itemClassName}>
          <Link href='/contract'>Contracts</Link>
        </Item>
      </List>
    );
  };

  return (
    <HeaderRoot>
      <Toolbar>
        <MenuButton
          aria-label='Open Menu'
          onClick={() => {
            setOpen(true);
          }}
        >
          <MenuIcon />
        </MenuButton>
        <Logo />
        <Nav>
          {list()}
          <Actions>
            <CartButton aria-label='See Cart' onClick={handleCartClick}>
              <CartIcon />
            </CartButton>
            <StyledAvatar src='/images/image-avatar.png' alt='profile image' tabIndex={0} />
          </Actions>
        </Nav>
      </Toolbar>
      <Cart anchorEl={anchorEl} onClose={onCartClose} />
      <Drawer
        open={open && isMobile}
        SlideProps={{
          timeout: !isMobile ? 0 : undefined
        }}
        PaperProps={{
          sx: {
            width: 250,
            alignItems: 'flex-start'
          }
        }}
      >
        <IconButton aria-label='Close Menu' sx={{ ml: '17px', mt: '16px' }} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        {list('drawer')}
      </Drawer>
    </HeaderRoot>
  );
}
