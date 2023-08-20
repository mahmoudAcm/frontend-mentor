import {
  Box,
  Container,
  CssBaseline,
  FormControl,
  IconButton,
  InputBase,
  Paper,
  styled,
  ThemeProvider,
  Typography
} from '@mui/material';
import { theme } from './theme';

const StyledPaper = styled(Paper)(() => ({
  width: 840,
  height: 651,
  padding: 56,
  borderRadius: '24px 24px 198px',
  margin: 'auto'
}));

const Form = styled('form')(() => ({
  display: 'flex',
  gap: 32,
  paddingBottom: 47,
  borderBottom: '2px solid hsl(0, 0%, 94%)',
  position: 'relative'
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  '& label': {
    fontFamily: theme.typography.fontFamily,
    fontSize: 13.8 / 16 + 'rem',
    lineHeight: 1.6,
    fontWeight: 700,
    letterSpacing: 3.726,
    color: 'hsl(0, 0%, 43%)'
  }
}));

const Input = styled(InputBase)(() => ({
  width: 160,
  borderRadius: 7,
  border: '1px solid hsl(0, 0%, 87%)',
  fontSize: 31 / 16 + 'rem',
  fontWeight: 700,
  lineHeight: 1.6,
  letterSpacing: 1.24,
  marginTop: 6.9,
  '& input': {
    padding: '11px 24px 11.4px',
    '&::placeholder': {
      color: 'hsl(0, 0%, 53%)',
      opacity: 1
    }
  }
}));

const Button = styled(IconButton)(() => ({
  position: 'absolute',
  width: 96,
  height: 96,
  borderRadius: '50%',
  background: 'hsl(259, 100%, 65%)',
  bottom: (-1 * (96 - 2)) / 2,
  right: 0,
  zIndex: 1,
  '&:hover': {
    background: 'hsl(0, 0%, 8%)'
  }
}));

const Result = styled(Box)(() => ({
  marginTop: 52,
  display: 'grid',
  gap: 10.27
}));

const Text = styled(Typography)(() => ({
  fontSize: 103.729 / 16 + 'rem',
  fontWeight: 800,
  fontStyle: 'italic',
  lineHeight: 1,
  '& span:nth-of-type(1)': {
    letterSpacing: 17.11,
    color: 'hsl(259, 100%, 65%)'
  },
  '& span:nth-of-type(2)': {
    letterSpacing: -2.075,
    color: 'hsl(0, 0%, 8%)',
    marginLeft: 8
  }
}));

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Box sx={{ display: 'flex', minHeight: '100vh', pt: '154px', pb: '155px' }}>
          <StyledPaper elevation={0}>
            <Form>
              <StyledFormControl>
                <label>DAY</label>
                <Input placeholder='DD' />
              </StyledFormControl>
              <StyledFormControl>
                <label>MONTH</label>
                <Input placeholder='MM' />
              </StyledFormControl>
              <StyledFormControl>
                <label>YEAR</label>
                <Input placeholder='YYYY' />
              </StyledFormControl>
              <Button aria-label='calulate the age'>
                <svg xmlns='http://www.w3.org/2000/svg' width='46' height='44' viewBox='0 0 46 44'>
                  <g fill='none' stroke='#FFF' strokeWidth='2'>
                    <path d='M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44' />
                  </g>
                </svg>
              </Button>
            </Form>
            <Result>
              <Text variant='h1'>
                <span>--</span>
                <span>years</span>
              </Text>
              <Text variant='h1'>
                <span>--</span>
                <span>months</span>
              </Text>
              <Text variant='h1'>
                <span>--</span>
                <span>days</span>
              </Text>
            </Result>
          </StyledPaper>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
