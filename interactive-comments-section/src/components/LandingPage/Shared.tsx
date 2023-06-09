import { styled } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';

export const StyledContainer = styled(Container)(({ theme }) => ({
  maxWidth: '100% !important',
  [theme.breakpoints.up('lg')]: {
    paddingLeft: '156px',
    paddingRight: '156px'
  },
  [theme.breakpoints.down(1398)]: {
    paddingLeft: '45px',
    paddingRight: '45px'
  },
  [theme.breakpoints.down(544)]: {
    paddingLeft: '16px',
    paddingRight: '16px'
  }
}));

const Intro = styled(Typography)(({ theme }) => ({
  color: 'hsl(234, 89%, 74%)',
  fontFamily: 'var(--plus-jakarta-font)',
  lineHeight: 1.75,
  marginBottom: '8px',
  [theme.breakpoints.down(422)]: {
    lineHeight: 1.31625
  }
}));

const FeaturesAndBenefits = styled(Typography)(({ theme }) => ({
  maxWidth: '541px',
  color: 'white',
  fontFamily: 'var(--plus-jakarta-font)',
  fontSize: '2.0625rem',
  letterSpacing: '0.9px',
  lineHeight: 1.303,
  fontWeight: '700',
  margin: 'auto',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '350px',
    fontSize: '1.3125rem',
    letterSpacing: '0.68px',
    lineHeight: 1.54
  }
}));

const CallToAction = styled(Typography)(({ theme }) => ({
  color: 'hsl(216, 12%, 84%)',
  fontFamily: 'var(--plus-jakarta-font)',
  lineHeight: 2,
  fontWeight: '400',
  marginTop: '31px',
  marginBottom: '90px',
  maxWidth: '657px',
  marginLeft: 'auto',
  marginRight: 'auto',
  [theme.breakpoints.down('md')]: {
    maxWidth: '589px',
    marginTop: '25px',
    marginBottom: '93px'
  },
  [theme.breakpoints.down(422)]: {
    maxWidth: '350px',
    fontSize: '0.9375rem',
    lineHeight: 1.6046667,
    marginBottom: '67px'
  }
}));

export function SecondaryHeader(props: { intro: string; features_and_benefits: string; call_to_action: string }) {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Intro>{props.intro}</Intro>
      <FeaturesAndBenefits>{props.features_and_benefits}</FeaturesAndBenefits>
      <CallToAction>{props.call_to_action}</CallToAction>
    </Box>
  );
}
