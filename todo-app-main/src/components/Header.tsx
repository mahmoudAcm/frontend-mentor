import { IconButton, styled, Typography } from '@mui/material';
import MoonIcon from '@/src/icons/MoonIcon';
import useCustomTheme from '@/src/hooks/useCustomTheme';
import SunIcon from '@/src/icons/SunIcon';

const HeaderRoot = styled('header')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  marginTop: 'calc(-300px + 78px)',
  marginBottom: '39px',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    marginTop: 'calc(-200px + 48px)',
    marginBottom: '33px'
  }
}));

const Title = styled(Typography)(() => ({
  fontSize: 'clamp(1.667rem, 1.185rem + 2.054vw, 2.5rem)',
  fontWeight: 700,
  letterSpacing: '15.2px',
  lineHeight: 1,
  color: 'white'
}));

export default function Header() {
  const { mode, toggleTheme } = useCustomTheme();

  return (
    <HeaderRoot>
      <Title variant='h1'>TODO</Title>
      <IconButton sx={{ mr: '-8px' }} aria-label={`switch to the ${mode} theme`} onClick={toggleTheme}>
        {mode === 'DARK' ? <SunIcon /> : <MoonIcon />}
      </IconButton>
    </HeaderRoot>
  );
}
