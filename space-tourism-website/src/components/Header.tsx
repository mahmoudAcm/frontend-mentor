import { alpha, Box, Drawer, styled, Typography, useMediaQuery, useTheme } from '@mui/material';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const HeaderRoot = styled('header')(({ theme }) => ({
  width: '100%',
  position: 'fixed',
  top: '40px',
  left: 0,
  right: 0,
  display: 'flex',
  zIndex: theme.zIndex.appBar,
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: '55px',
  '& .menu-icon': {
    display: 'none',
    cursor: 'pointer'
  },
  [theme.breakpoints.down('lg')]: {
    top: 0,
    paddingLeft: '39px'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '24px',
    '& nav': {
      display: 'none'
    },
    '& .menu-icon': {
      display: 'block'
    }
  }
}));

const Divider = styled(Box)(({ theme }) => ({
  flex: 1,
  height: 1,
  background: alpha('#FFF', 0.1),
  marginLeft: '64px',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    width: 30,
    height: 1,
    background: alpha('#FFF', 0.1),
    zIndex: 1,
    right: -30
  },
  [theme.breakpoints.down('lg')]: {
    display: 'none'
  }
}));

const Nav = styled('nav')(({ theme }) => ({
  width: '830px',
  minHeight: '96px',
  background: 'rgba(255, 255, 255, 0.04)',
  backdropFilter: 'blur(40.7742px)',
  display: 'flex',
  paddingLeft: '123px',

  [theme.breakpoints.down('lg')]: {
    width: 'fit-content',
    paddingLeft: '48px',
    paddingRight: '46px',
    '& .number': {
      display: 'none'
    },
    '& .text': {
      ...theme.typography.subheading2
    }
  }
}));
const List = styled('ul')(({ theme }) => ({
  margin: 0,
  padding: 0,
  listStyleType: 'none',
  display: 'flex',
  gap: 48,
  '& a': {
    color: 'inherit',
    textDecoration: 'none'
  },
  '& .number': {
    marginRight: '11px'
  },
  [theme.breakpoints.down('lg')]: {
    gap: 37
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: 32,
    paddingLeft: '32px',
    paddingTop: '118px'
  }
}));

const Item = styled('li')(({ theme }) => ({
  cursor: 'pointer',
  position: 'relative',
  paddingTop: '39px',
  paddingBottom: '35px',
  textTransform: 'uppercase',
  ...theme.typography.nav,
  transition: theme.transitions.create('border-color'),
  borderBottom: '3px solid transparent',
  userSelect: 'none',
  '&.active': {
    borderColor: 'white !important'
  },
  '&:hover': {
    borderColor: '#979797'
  },
  [theme.breakpoints.between('sm', 'lg')]: {
    '&.secondItem': {
      marginRight: 5
    }
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: 0,
    paddingBottom: 0,
    borderBottom: 0,
    '&::after': {
      transition: theme.transitions.create('background-color'),
      content: '""',
      position: 'absolute',
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      width: '4px',
      height: '32px'
    },
    '&.active::after': {
      backgroundColor: 'white !important'
    },
    '&:hover::after': {
      backgroundColor: '#979797'
    }
  }
}));

const pages = ['home', 'destination', 'crew', 'technology'];

export default function Header() {
  const router = useRouter();
  const activePath = router.asPath.replace('/', '');
  const theme = useTheme();
  const isMobile = useMediaQuery(() => theme.breakpoints.down('sm'));
  const [isOpen, setOpen] = useState(false);

  const open = isOpen && isMobile;

  const list = (
    <List>
      {pages.map((page, idx) => (
        <Link href={'/' + (idx === 0 ? '' : page)} key={idx}>
          <Item
            className={clsx({
              active: activePath === (idx === 0 ? '' : page),
              secondItem: idx === 1
            })}
          >
            <Typography variant='nav' fontWeight='bold' className='number'>
              0{idx}
            </Typography>
            <Typography variant='nav' className='text'>
              {page}
            </Typography>
          </Item>
        </Link>
      ))}
    </List>
  );

  return (
    <HeaderRoot>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src='/shared/logo.svg' alt='logo' width='48' height='48' />
      <Divider />
      {<Nav>{list}</Nav>}
      <Drawer
        open={open}
        anchor='right'
        hideBackdrop
        PaperProps={{
          sx: {
            width: '254px',
            background: 'rgba(255, 255, 255, 0.04)',
            backdropFilter: 'blur(40.7742px)',
            '& .close-icon': {
              position: 'absolute',
              top: ' 33.95px',
              right: '26.45px',
              cursor: 'pointer'
            }
          }
        }}
        transitionDuration={{
          enter: 250,
          exit: isMobile ? 250 : 0
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='21'
          className='close-icon'
          onClick={() => {
            setOpen(false);
          }}
        >
          <g fill='#D0D6F9' fillRule='evenodd'>
            <path d='M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z' />
            <path d='M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z' />
          </g>
        </svg>
        {list}
      </Drawer>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='21'
        className='menu-icon'
        onClick={() => {
          setOpen(true);
        }}
      >
        <g fill='#D0D6F9' fillRule='evenodd'>
          <path d='M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z' />
        </g>
      </svg>
    </HeaderRoot>
  );
}
