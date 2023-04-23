import { Box, Button, styled } from '@mui/material';
import { Dispatch, MouseEventHandler, SetStateAction, useRef } from 'react';
import Stack from '../libs/stack';
import BigNumber from 'bignumber.js';
import useTheme from '../hooks/useTheme';

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

const numbers = new Stack<BigNumber>();
const operations = new Stack();
const operators = ['+', '-', '*', '/'];

function evaluateExpression(expression: string) {
  numbers.clear();
  operations.clear();
  let isFirstOperatorIsMinus = false;

  const modify = () => {
    if (numbers.length === 1 && expression[0] === '-' && !isFirstOperatorIsMinus) {
      const res = numbers.pop()!.div(-1);
      numbers.push(res);
      operations.pop();
      isFirstOperatorIsMinus = true;
      return;
    }

    //check if we can preform a calculation
    if (numbers.length >= 2 && !operations.empty()) {
      const last = numbers.pop()!;
      let result = numbers.pop()!;
      const operation = operations.pop();
      switch (operation) {
        case '+':
          result = result.plus(last);
          break;
        case '-':
          result = result.minus(last);
          break;
        case '*':
          result = result.times(last);
          break;
        case '/':
          result = result.div(last);
          break;
      }
      numbers.push(result);
    }
  };

  //scanning the expression
  for (let i = 0; i < expression.length; i++) {
    modify();
    //fill the numbers and operations stack
    if (!operators.includes(expression[i])) {
      let num = '';
      while (i < expression.length && !operators.includes(expression[i])) {
        num += expression[i];
        i++;
      }
      i--;
      if (num !== '.') numbers.push(new BigNumber(num));
    } else {
      //this is an operation
      if (!numbers.empty()) operations.push(expression[i]);
      else if (expression[i] === '-') operations.push('-');
    }
    modify();
  }

  const result = numbers.back() ?? new BigNumber(0);
  if (result.toString().length > 10) return result.toNumber().toExponential(10);
  return result.toNumber().toString();
}

interface KeypadProps {
  expression: string;
  setExpression: Dispatch<SetStateAction<string>>;
  onEquals: (result: string) => void;
}

export default function Keypad(props: KeypadProps) {
  const { theme } = useTheme();
  const { expression, setExpression } = props;
  const isEqualsFired = useRef(false);

  const cleanExpression = (key: string) => (expression: string) => {
    const newExpression = expression + key;

    const stack = new Stack();
    for (let i = 0; i < newExpression.length; i++) {
      if (!stack.empty() && operators.includes(newExpression[i]) && operators.includes(stack.back())) {
        stack.pop();
        stack.push(newExpression[i]);
      } else if (!operators.includes(newExpression[i])) {
        let isFloat = false;
        while (i < newExpression.length && !operators.includes(newExpression[i])) {
          if (newExpression[i] === '.') {
            if (!isFloat) stack.push(newExpression[i]);
            isFloat = true;
          } else stack.push(newExpression[i]);
          i++;
        }
        i--;
      } else {
        if (stack.back() === '.') {
          stack.pop();
        }
        stack.push(newExpression[i]);
      }
    }

    return stack.join('');
  };

  const handleButton: MouseEventHandler<HTMLButtonElement> = evt => {
    const key = evt.currentTarget.value;
    if (isEqualsFired.current) {
      setExpression(expression => {
        if (!operators.includes(key)) return cleanExpression(key)('');
        return expression + key;
      });
      isEqualsFired.current = false;
      return;
    }
    setExpression(cleanExpression(key));
  };

  return (
    <KeypadRoot role='region' aria-roledescription='keypad'>
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
        onClick={() => {
          if (!isEqualsFired.current) setExpression(expression => expression.slice(0, expression.length - 1));
        }}
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
        onClick={() => {
          setExpression('');
          props.onEquals('0');
        }}
      >
        Reset
      </StyledButton>
      <StyledButton
        variant='contained'
        data-type='action'
        aria-label='equals'
        sx={{ gridColumnStart: 'span 2', color: theme === 'THEME3' ? '#072C32 !important' : '' }}
        onClick={() => {
          const result = evaluateExpression(expression);
          setExpression(new BigNumber(result).toString());
          isEqualsFired.current = true;
          props.onEquals(result);
        }}
      >
        =
      </StyledButton>
    </KeypadRoot>
  );
}
