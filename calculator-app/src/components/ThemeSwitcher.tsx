import { ReactNode } from 'react';
import { Box, styled } from '@mui/material';
import { THEMES } from '../constants';
import useTheme from '../hooks/useTheme';

const ThemeSwitcherRoot = styled(Box)(() => ({
  display: 'flex',
  gap: '27px',
  alignItems: 'center'
}));

const Switch = styled(Box)(({ theme }) => ({
  width: '70px',
  height: '27px',
  background: theme.palette.background.paper,
  borderRadius: 99999,
  position: 'relative',
  isolation: 'isolate',
  // overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  '--circle-width': '16px',
  '&:active': {
    '--circle-width': '20px'
  },
  '&::after': {
    content: '" "',
    width: 'var(--circle-width)',
    height: '16px',
    borderRadius: '50%',
    background: theme.palette.primary.main,
    position: 'absolute',
    cursor: 'pointer',
    transition: theme.transitions.create(['left', 'width'], {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeInOut
    })
  },
  [`&[aria-label="${THEMES.THEME1}"]`]: {
    '&::after': {
      left: '6px'
    }
  },
  [`&[aria-label="${THEMES.THEME2}"]`]: {
    '&::after': {
      left: 'calc((100% - var(--circle-width)) / 2)'
    }
  },
  [`&[aria-label="${THEMES.THEME3}"]`]: {
    '&::after': {
      left: 'calc(100% - (var(--circle-width) + 6px))'
    }
  }
}));

const Label = styled('label')(({ theme }) => ({
  flexBasis: '100%',
  cursor: 'pointer',
  position: 'relative',
  '& input': {
    visibility: 'hidden'
  },
  '&::after': {
    content: '" "',
    position: 'absolute',
    top: '-21px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontFamily: theme.typography.fontFamily,
    fontSize: '1rem',
    lineHeight: 1
  }
}));

interface ThemeSwitcher {
  label?: string | ReactNode;
}

export default function ThemeSwitcher(props: ThemeSwitcher) {
  const { theme, setTheme } = useTheme();

  return (
    <ThemeSwitcherRoot>
      <span id='calculator-theme-switcher'>{props.label}</span>
      <Switch role='radiogroup' aria-labelledby='calculator-theme-switcher' aria-label={theme}>
        {Object.values(THEMES).map((_theme, idx) => (
          <Label
            role='radio'
            aria-checked={_theme === theme}
            htmlFor={_theme}
            key={idx}
            sx={{
              '&::after': {
                content: `'${idx + 1}'`
              }
            }}
          >
            <input
              id={_theme}
              type='radio'
              name='theme'
              value={_theme}
              checked={_theme === theme}
              onChange={event => {
                setTheme(event.target.value);
              }}
              aria-label={`toggle ${_theme} theme`}
            />
          </Label>
        ))}
      </Switch>
    </ThemeSwitcherRoot>
  );
}
