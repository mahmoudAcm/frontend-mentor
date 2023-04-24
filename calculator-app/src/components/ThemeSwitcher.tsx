import { createRef, KeyboardEvent, ReactNode, RefObject, useEffect, useRef, useState } from 'react';
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
  display: 'flex',
  alignItems: 'center',
  '--circle-width': '16px',
  '&:active': {
    '--circle-width': '20px'
  },
  '& .btn': {
    width: 'var(--circle-width)',
    height: '16px',
    borderRadius: '50%',
    background: theme.palette.primary.main,
    position: 'absolute',
    cursor: 'pointer',
    transition: theme.transitions.create(['left', 'width', 'background'], {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeInOut
    }),
    zIndex: 1,
    '&:hover': {
      background: theme.palette.primary.light
    }
  },
  [`&[aria-label="${THEMES.THEME1}"]`]: {
    '& .btn': {
      left: '6px'
    }
  },
  [`&[aria-label="${THEMES.THEME2}"]`]: {
    '& .btn': {
      left: 'calc((100% - var(--circle-width)) / 2)'
    }
  },
  [`&[aria-label="${THEMES.THEME3}"]`]: {
    '& .btn': {
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
  const tabFocus = useRef(0);
  const [labels] = useState<RefObject<HTMLLabelElement>[]>([createRef(), createRef(), createRef()]);

  function handleKeyDown(evt: KeyboardEvent<HTMLDivElement>) {
    if (evt.key == 'ArrowRight' || evt.key === 'ArrowLeft') {
      labels[tabFocus.current].current?.setAttribute('tabindex', '-1');
      if (evt.key === 'ArrowRight') {
        tabFocus.current += 1;
        tabFocus.current %= 3;
      } else {
        tabFocus.current -= 1;
        if (tabFocus.current === -1) tabFocus.current = 2;
      }
    }
    labels[tabFocus.current].current?.setAttribute('tabindex', '0');
    labels[tabFocus.current].current?.focus();
  }

  //update the current active tabindex
  useEffect(() => {
    labels.forEach((label, idx) => {
      if (label.current?.ariaChecked === 'true') tabFocus.current = idx;
    });
  });

  return (
    <ThemeSwitcherRoot>
      <span id='calculator-theme-switcher'>{props.label}</span>
      <Switch
        role='radiogroup'
        aria-labelledby='calculator-theme-switcher'
        aria-label={theme}
        onKeyDown={handleKeyDown}
      >
        <span className='btn' role='button' aria-label='switch button'></span>
        {Object.values(THEMES).map((_theme, idx) => (
          <Label
            role='radio'
            aria-checked={_theme === theme}
            htmlFor={_theme}
            key={idx}
            ref={labels[idx]}
            sx={{
              '&::after': {
                content: `'${idx + 1}'`
              }
            }}
            tabIndex={_theme === theme ? 0 : -1}
            aria-label={`toggle ${_theme} theme`}
            onKeyDown={event => {
              if (event.key === 'Enter') {
                setTheme(_theme);
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
              aria-hidden='true'
            />
          </Label>
        ))}
      </Switch>
    </ThemeSwitcherRoot>
  );
}
