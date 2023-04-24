import { Box, styled, Typography } from '@mui/material';
import Stack from '../libs/stack';
import useTheme from '../hooks/useTheme';

const ScreenRoot = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '127px',
  background: 'var(--bg-screen)',
  borderRadius: '8px',
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'flex-end',
  overflow: 'auto',
  padding: '22px 31px',
  gap: '5px',
  textAlign: 'end',
  [theme.breakpoints.down('sm')]: {
    height: '89px',
    padding: '22px 25px'
  }
}));

const Expression = styled(Box)(() => ({
  fontSize: '1rem',
  lineHeight: 1.2,
  userSelect: 'none',
  fontWeight: 500,
  wordBreak: 'break-all',
  opacity: 0.6
}));

const Result = styled(Typography)(({ theme }) => ({
  fontSize: '3.507rem',
  lineHeight: 1,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightBold,

  '&::selection': {
    background: theme.palette.background.paper,
    color: theme.palette.getContrastText(theme.palette.background.paper)
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem'
  }
}));

function format(expression: string) {
  return expression.replace(/[+\-\/*=]/g, match => ' ' + match + ' ');
}

function removeTrailingZeros(expression: string) {
  const stack = new Stack<string>();
  for (let i = 0; i < expression.length; i++) {
    if (!/[+\-\/*]/g.test(expression[i])) {
      let num = '';
      while (i < expression.length && !/[+\-\/*]/g.test(expression[i])) {
        num += expression[i];
        i++;
      }
      i--;
      if (num === '0') {
        stack.push('0');
      } else stack.push(...num.replace(/^0*/, '').replace(/^\./, '0.').split(''));
    } else {
      stack.push(expression[i]);
    }
  }
  return stack.join('');
}

interface ScreenProps {
  result: string;
  expression: string;
}

export default function Screen(props: ScreenProps) {
  const { theme } = useTheme();
  const result = format(removeTrailingZeros(props.expression));

  return (
    <ScreenRoot
      role='textbox'
      aria-label='calculator screen'
      sx={{ color: theme === 'THEME1' ? 'white' : '' }}
      tabIndex={0}
    >
      {result ? (
        <Expression role='math' aria-label={'the expression is ' + result} tabIndex={0}>
          {result}
        </Expression>
      ) : (
        <></>
      )}
      <Result variant='h1' aria-live='polite' aria-atomic='true' tabIndex={0} aria-label={'result is ' + props.result}>
        {props.result}
      </Result>
    </ScreenRoot>
  );
}
