import { Box, Button, styled } from '@mui/material';
import { Dispatch, SetStateAction, SyntheticEvent, useRef } from 'react';
import useTheme from '../hooks/useTheme';
import { cleanExpression, DECIMAL_PLACES, evaluateExpression, isOperator } from '../libs/expression';
import { useKeyboardEvent, usePasteEvent } from '../hooks/keypad';

const KeypadRoot = styled(Box)(({ theme }) => ({
  width: '100%',
  borderRadius: '8px',
  background: theme.palette.background.paper,
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 104px)',
  justifyContent: 'space-between',
  rowGap: '28px',
  columnGap: '11px',
  padding: '31px 28px',
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(4, minmax(61px, 1fr))',
    padding: '22px 24px',
    rowGap: '17px'
  },
  [theme.breakpoints.down(371)]: {
    gridTemplateColumns: 'repeat(4, calc((100% - 34px) / 4))'
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  minHeight: '60px',
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.text.primary,
  paddingTop: '13px',
  paddingBottom: '7px',
  fontWeight: theme.typography.fontWeightBold,
  fontSize: '1.6875rem',
  lineHeight: 1,
  "&[data-type='digit']": {
    fontSize: '2.5rem'
  },
  "&[data-type='dot'], &[data-type='operation']": {
    fontSize: '2.4375rem'
  },
  "&[aria-label='multiply']": {
    fontSize: '1.5rem !important'
  },
  "&[data-type='action']": {
    color: 'white'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    "&[data-type='digit'], &[data-type='operation']": {
      fontSize: '2rem'
    },
    "&[data-type='dot'], &[data-type='action']": {
      fontSize: '1.0625rem'
    }
  },
  [theme.breakpoints.down(371)]: {
    minWidth: 'calc((100% - 34px) / 4)'
  }
}));

interface KeypadProps {
  expression: string;
  setExpression: Dispatch<SetStateAction<string>>;
  onEquals: (result: string) => void;
}

export default function Keypad(props: KeypadProps) {
  const { theme } = useTheme();
  const { expression, setExpression } = props;
  const isEqualsFired = useRef(false);
  const scope = useRef<HTMLDivElement>();
  const expressionRef = useRef(expression);
  expressionRef.current = expression;

  usePasteEvent(props.onEquals, setExpression, isEqualsFired);
  useKeyboardEvent(scope, handleKey, onDel, onReset, onEquals);

  function onDel() {
    if (!isEqualsFired.current)
      setExpression(expression => {
        const newExpression = expression.slice(0, expression.length - 1);
        if (newExpression.length === 0) return '0';
        return newExpression;
      });
  }

  function onEquals() {
    const result = evaluateExpression(expressionRef.current);
    isEqualsFired.current = true;
    if (!result.isFinite()) {
      props.onEquals("Can't divide by zero");
      return;
    }

    if (result.isNaN()) {
      props.onEquals('Invalid Expression');
      return;
    }

    const isSafeNumber =
      result.isLessThanOrEqualTo(Number.MAX_SAFE_INTEGER) && result.isGreaterThanOrEqualTo(Number.MIN_SAFE_INTEGER);

    const decimalPlaces = Math.min(result.decimalPlaces() ?? 0, DECIMAL_PLACES);

    props.onEquals(isSafeNumber ? result.toFormat(decimalPlaces) : result.toExponential(decimalPlaces));

    setExpression(
      result.toFormat(decimalPlaces, {
        decimalSeparator: '.',
        groupSeparator: ''
      })
    );
  }

  function onReset() {
    setExpression('0');
    props.onEquals('0');
  }

  function handleKey(key: string) {
    if (isEqualsFired.current) {
      setExpression(expression => {
        if (!isOperator(key)) return cleanExpression(key)('');
        return expression + key;
      });
      isEqualsFired.current = false;
      return;
    }
    setExpression(cleanExpression(key));
  }

  function handleButton(evt: SyntheticEvent) {
    handleKey((evt.currentTarget as HTMLButtonElement).value);
  }

  return (
    <KeypadRoot role='region' aria-roledescription='keypad' ref={scope}>
      {/*first row*/}
      <StyledButton data-type='digit' value='7' onClick={handleButton}>
        7
      </StyledButton>
      <StyledButton data-type='digit' value='8' onClick={handleButton}>
        8
      </StyledButton>
      <StyledButton data-type='digit' value='9' onClick={handleButton}>
        9
      </StyledButton>
      <StyledButton
        variant='contained'
        color='secondary'
        data-type='action'
        aria-label='delete'
        onClick={onDel}
        value='Backspace'
      >
        DEL
      </StyledButton>

      {/*second row*/}
      <StyledButton data-type='digit' value='4' onClick={handleButton}>
        4
      </StyledButton>
      <StyledButton data-type='digit' value='5' onClick={handleButton}>
        5
      </StyledButton>
      <StyledButton data-type='digit' value='6' onClick={handleButton}>
        6
      </StyledButton>
      <StyledButton data-type='operation' value='+' aria-label='add' onClick={handleButton}>
        +
      </StyledButton>

      {/*third row*/}
      <StyledButton data-type='digit' value='1' onClick={handleButton}>
        1
      </StyledButton>
      <StyledButton data-type='digit' value='2' onClick={handleButton}>
        2
      </StyledButton>
      <StyledButton data-type='digit' value='3' onClick={handleButton}>
        3
      </StyledButton>
      <StyledButton data-type='operation' value='-' aria-label='subtarct' onClick={handleButton}>
        -
      </StyledButton>

      {/*forth row*/}
      <StyledButton data-type='dot' value='.' aria-label='.' onClick={handleButton}>
        .
      </StyledButton>
      <StyledButton data-type='digit' value='0' onClick={handleButton}>
        0
      </StyledButton>
      <StyledButton data-type='operation' value='/' aria-label='divide by' onClick={handleButton}>
        /
      </StyledButton>
      <StyledButton data-type='operation' value='*' aria-label='multiply' onClick={handleButton}>
        x
      </StyledButton>

      <StyledButton
        variant='contained'
        color='secondary'
        data-type='action'
        aria-label='reset result'
        sx={{ gridColumnStart: 'span 2' }}
        onClick={onReset}
        value='Delete'
      >
        Reset
      </StyledButton>
      <StyledButton
        variant='contained'
        data-type='action'
        aria-label='equals'
        sx={{ gridColumnStart: 'span 2', color: theme === 'THEME3' ? '#072C32 !important' : '' }}
        onClick={onEquals}
        value='='
      >
        =
      </StyledButton>
    </KeypadRoot>
  );
}
