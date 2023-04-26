import Stack from './stack';
import BigNumber from 'bignumber.js';

const operators = ['+', '-', '*', '/'];

export const DECIMAL_PLACES = 14;

export const isOperator = (char: string) => operators.includes(char);
export const isDigit = (char: string) => /\d/.test(char);

const numbers = new Stack<BigNumber>();
const operations = new Stack();

export const evaluateExpression = (expression: string) => {
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
    if (!isOperator(expression[i])) {
      let num = '';
      while (i < expression.length && !isOperator(expression[i])) {
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

  return numbers.back() ?? new BigNumber(0);
};

export const cleanExpression = (key: string) => (previousExpression: string) => {
  const expression = previousExpression + key;

  const stack = new Stack();
  for (let i = 0; i < expression.length; i++) {
    if (!stack.empty() && isOperator(expression[i]) && isOperator(stack.back())) {
      //if there is two consecutive operators just accept the last one
      stack.pop();
      stack.push(expression[i]);
    } else if (!isOperator(expression[i])) {
      let isFloat = false;
      let decimalCount = DECIMAL_PLACES;
      let digits = 0;
      while (i < expression.length && (isDigit(expression[i]) || expression[i] === '.')) {
        if (expression[i] === '.') {
          if (!isFloat) stack.push(expression[i]);
          isFloat = true;
        } else if (!isFloat || (isFloat && decimalCount--)) {
          stack.push(expression[i]);
          digits++;
        }
        i++;
      }
      i--;

      //`.` will be `0.`
      if (decimalCount === DECIMAL_PLACES && isFloat && !digits) {
        stack.pop();
        stack.push('0');
        stack.push('.');
      }
    } else {
      //when we have something like this `123.` it will remove the dot `123`
      if (stack.back() === '.') {
        stack.pop();
      }

      stack.push(expression[i]);
    }
  }

  const cleanedExpression = stack.join('');

  //if the expression will start with an operation
  //we add will add `0` at the start before that operator i.e + will be `0 +` and so on...
  if (!stack.empty() && isOperator(cleanedExpression[0]) && cleanedExpression[0] !== '-')
    return '0' + cleanedExpression;

  return cleanedExpression;
};

export const isValidExpression = (expression: string) => {
  return !Boolean(expression.match(/[^\d\-\s+*\/.]/g));
};
