'use client';

import LogoIcon from '@/src/icons/LogoIcon';
import Link from 'next/link';
import { Avatar, Box, IconButton, styled } from '@mui/material';
import CartIcon from '@/src/icons/CartIcon';
import MenuIcon from '@/src/icons/MenuIcon';
import Cart from '@/src/app/(Cart)/Cart';
import { MouseEvent, useState } from 'react';

const HeaderRoot = styled('header')(() => ({
  paddingLeft: 24,
  paddingRight: 24,
  position: 'sticky',
  top: 0,
  background: 'white'
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
    display: 'none'
  }
}));

const Item = styled('li')(({ theme }) => ({
  fontSize: 15.19 / 16 + 'rem',
  lineHeight: 1.5,
  color: 'hsl(218, 4%, 43%)',
  position: 'relative',
  '& a': {
    font: 'inherit',
    lineHeight: 'inherit',
    textDecoration: 'none',
    color: 'currentColor',
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
  '& a:hover, & a:focus': {
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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleCartClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const onCartClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderRoot>
      <Toolbar>
        <MenuButton>
          <MenuIcon />
        </MenuButton>
        <Logo />
        <Nav>
          <List>
            <Item>
              <Link href='/collections'>Collections</Link>
            </Item>
            <Item>
              <Link href='/men'>Men</Link>
            </Item>
            <Item>
              <Link href='/women'>Women</Link>
            </Item>
            <Item>
              <Link href='/about'>About</Link>
            </Item>
            <Item>
              <Link href='/contract'>Contracts</Link>
            </Item>
          </List>
          <Actions>
            <CartButton aria-label='See Cart' onClick={handleCartClick}>
              <CartIcon />
            </CartButton>
            <StyledAvatar src='/images/image-avatar.png' alt='profile image' tabIndex={0} />
          </Actions>
        </Nav>
      </Toolbar>
      <Cart anchorEl={anchorEl} onClose={onCartClose} />
    </HeaderRoot>
  );
}
