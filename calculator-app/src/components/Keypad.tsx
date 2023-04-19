import { Box, Button, styled } from '@mui/material';
import { MouseEventHandler } from 'react';

const KeypadRoot = styled(Box)(({ theme }) => ({
  width: '538px',
  borderRadius: '8px',
  background: theme.palette.background.paper,
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 104px)',
  justifyContent: 'space-between',
  rowGap: '28px',
  columnGap: '11px',
  padding: '31px 28px',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
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

export default function Keypad() {
  const handleButton: MouseEventHandler<HTMLButtonElement> = evt => {
    console.log(evt.currentTarget.dataset, evt.currentTarget.value);
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
      <StyledButton variant='contained' color='secondary' data-type='action' aria-label='delete'>
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
      >
        Reset
      </StyledButton>
      <StyledButton variant='contained' data-type='action' aria-label='equals' sx={{ gridColumnStart: 'span 2' }}>
        =
      </StyledButton>
    </KeypadRoot>
  );
}
