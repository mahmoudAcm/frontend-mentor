import { styled, Typography } from '@mui/material';
import ThemeSwitcher from './ThemeSwitcher';
import useTheme from '../hooks/useTheme';

const HeaderRoot = styled('header')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '5px',
  '& *::selection': {
    background: theme.palette.background.paper,
    color: theme.palette.getContrastText(theme.palette.background.paper)
  }
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.81rem',
  lineHeight: 1,
  fontWeight: 700
}));

export default function Header() {
  const { theme } = useTheme();

  return (
    <HeaderRoot sx={{ color: theme === 'THEME1' ? 'white' : '' }}>
      <StyledTypography sx={{ fontSize: '2rem', marginLeft: '5px' }}>calc</StyledTypography>
      <ThemeSwitcher label={<StyledTypography>THEME</StyledTypography>} />
    </HeaderRoot>
  );
}
