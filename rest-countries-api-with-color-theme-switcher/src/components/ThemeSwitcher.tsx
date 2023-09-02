import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import { Box, Button, styled } from '@mui/material';
import useThemeContext from '@/src/hooks/useThemeContext';

const SwitchButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textTransform: 'none',
  gap: 10,
  fontSize: '1rem',
  lineHeight: 22 / 16,
  letterSpacing: 0.16,
  color: theme.palette.text.primary,
  marginLeft: 'auto',
  marginRight: -8,
  userSelect: 'none',
  cursor: 'pointer',
  padding: '5px 8px',
  transition: 'color 200ms',
  '&:focus-visible': {
    outline: 'none',
    boxShadow: '0 0 0 2px currentColor',
    borderRadius: 2
  }
}));

export default function ThemeSwitcher() {
  const { mode, toggleTheme } = useThemeContext();
  return (
    <SwitchButton
      onClick={toggleTheme}
      onKeyDown={evt => {
        if (evt.key === 'Enter') toggleTheme();
      }}
      tabIndex={0}
    >
      {mode === 'DARK' ? <Brightness5Icon fontSize='small' /> : <DarkModeOutlinedIcon />}
      {mode === 'DARK' ? 'Light' : 'Dark'} Mood
    </SwitchButton>
  );
}
