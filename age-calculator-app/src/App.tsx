import {
  Box,
  Container,
  CssBaseline,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  InputBase,
  Paper,
  styled,
  ThemeProvider,
  Typography
} from '@mui/material';
import { theme } from './theme';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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

const StyledFormControl = styled(FormControl)(() => ({
  width: 160,
  position: 'relative',
  '& label': {
    fontSize: 13.8 / 16 + 'rem',
    lineHeight: 1.6,
    fontWeight: 700,
    letterSpacing: 3.726,
    color: 'hsl(0, 0%, 43%)',
    '&.Mui-focused': {
      color: 'hsl(0, 0%, 43%)'
    },
    '&.Mui-error': {
      color: 'hsl(358, 89%, 66%)'
    }
  },
  '& .MuiFormHelperText-root': {
    width: '100%',
    fontSize: 13.8 / 16 + 'rem',
    lineHeight: 1.6,
    fontWeight: 400,
    fontStyle: 'italic',
    letterSpacing: 0.138,
    marginTop: 7,
    marginLeft: 0,
    position: 'absolute',
    bottom: -29.07,
    zIndex: 1,
    '&.Mui-error': {
      color: 'hsl(358, 89%, 66%)'
    }
  }
}));

const Input = styled(InputBase)(() => ({
  borderRadius: 7,
  border: '1px solid hsl(0, 0%, 87%)',
  fontSize: 31 / 16 + 'rem',
  fontWeight: 700,
  lineHeight: 1.6,
  letterSpacing: 1.24,
  marginTop: 6.9,
  '&.Mui-focused': {
    borderColor: 'hsl(259, 100%, 65%)'
  },
  '& input': {
    padding: '11px 24px 11.4px',
    '&::placeholder': {
      color: 'hsl(0, 0%, 53%)',
      opacity: 1
    }
  },
  '&.Mui-error': {
    borderColor: 'hsl(358, 89%, 66%)'
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

const today = new Date();
const numberRegx = /^\d+$/g;

const schema = yup.object({
  day: yup
    .string()
    .required('This is required')
    .test('day', 'Must be a valid day', value => {
      const month = parseInt(value);
      return month >= 1 && month <= 31 && !!value.match(numberRegx);
    }),
  month: yup
    .string()
    .required('This is required')
    .test('month', 'Must be a valid month', value => {
      const month = parseInt(value);
      return month >= 1 && month <= 12 && !!value.match(numberRegx);
    }),
  year: yup
    .string()
    .required('This is required')
    .test('year', 'Must be in the past', value => {
      const year = parseInt(value);
      const currentYear = today.getFullYear();
      return year <= currentYear;
    })
});

export default function App() {
  const {
    setError,
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    reValidateMode: 'onSubmit',
    mode: 'onSubmit'
  });
  const [result, setResult] = useState({ years: '--', months: '--', days: '--' });

  const isValid = !Boolean(errors.day?.message || errors.month?.message || errors.year?.message);

  const onSubmit = ({ day, month, year }: yup.InferType<typeof schema>) => {
    const birthDate = new Date(+year, +month - 1, +day);

    let years = today.getFullYear() - +year;
    let months = today.getMonth() - +month + 1;
    let days = today.getDate() - +day;

    if (days < 0) {
      months--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, +day);
      days = Math.floor((today.getTime() - lastMonth.getTime()) / (1000 * 60 * 60 * 24));
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    if (
      birthDate.getMonth() !== +month - 1 ||
      birthDate.getDate() !== +day ||
      +year < 1500 ||
      Math.min(years, months, days) < 0
    ) {
      setError('day', { message: 'Must be a valid date' });
      return;
    }

    setResult({ years: years + '', months: months + '', days: days + '' });
  };

  const useAnimateNumbers = (value: number) => {
    const [time, setTime] = useState(0);

    //resting time to make all the result elements to be animated form the start again
    useEffect(() => {
      setTime(0);
    }, [JSON.stringify(result)]);

    useEffect(() => {
      if (isNaN(value)) return;
      const timeout = setTimeout(() => {
        if (time >= value) clearTimeout(timeout);
        setTime(time => (time >= value ? value : time + 1));
      }, 30);
    }, [value, time]);

    return isNaN(value) ? '--' : time;
  };

  const animatedYears = useAnimateNumbers(+result.years);
  const animatedMonths = useAnimateNumbers(+result.months);
  const animatedDays = useAnimateNumbers(+result.days);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Box sx={{ display: 'flex', minHeight: '100vh', pt: '154px', pb: '155px' }}>
          <StyledPaper elevation={0}>
            <Form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete='off'>
              <StyledFormControl error={!isValid}>
                <FormLabel htmlFor='day'>DAY</FormLabel>
                <Input id='day' placeholder='DD' inputProps={register('day')} />
                {errors.day?.message ? <FormHelperText>{errors.day?.message}</FormHelperText> : <></>}
              </StyledFormControl>
              <StyledFormControl error={!isValid}>
                <FormLabel htmlFor='month'>MONTH</FormLabel>
                <Input id='month' placeholder='MM' inputProps={register('month')} />
                {errors.month?.message ? <FormHelperText>{errors.month?.message}</FormHelperText> : <></>}
              </StyledFormControl>
              <StyledFormControl error={!isValid}>
                <FormLabel htmlFor='year'>YEAR</FormLabel>
                <Input id='year' placeholder='YYYY' inputProps={register('year')} />
                {errors.year?.message ? <FormHelperText>{errors.year?.message}</FormHelperText> : <></>}
              </StyledFormControl>
              <Button aria-label='calulate the age' type='submit'>
                <svg xmlns='http://www.w3.org/2000/svg' width='46' height='44' viewBox='0 0 46 44'>
                  <g fill='none' stroke='#FFF' strokeWidth='2'>
                    <path d='M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44' />
                  </g>
                </svg>
              </Button>
            </Form>
            <Result>
              <Text variant='h1'>
                <span>{animatedYears}</span>
                <span>years</span>
              </Text>
              <Text variant='h1'>
                <span>{animatedMonths}</span>
                <span>months</span>
              </Text>
              <Text variant='h1'>
                <span>{animatedDays}</span>
                <span>days</span>
              </Text>
            </Result>
          </StyledPaper>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
