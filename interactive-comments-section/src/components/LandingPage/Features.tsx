import { SecondaryHeader, StyledContainer } from '@/src/components/LandingPage/Shared';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { features } from '@/src/components/LandingPage/data';

const Icon = styled(Box)(() => ({
  width: '40px',
  height: '40px',
  borderRadius: '8px',
  background: 'hsl(239, 84%, 67%)',
  position: 'relative',
  margin: 'auto',
  '& svg': {
    position: 'absolute',
    inset: 0,
    margin: 'auto'
  }
}));

const FeaturesWrapper = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  display: 'flex',
  margin: 'auto',
  justifyContent: 'space-between',
  gap: '35px',
  flexWrap: 'wrap',
  [theme.breakpoints.down('lg')]: {
    justifyContent: 'center',
    gap: '69px'
  },
  [theme.breakpoints.down('sm')]: {
    gap: '57px'
  }
}));

const FeatureBox = styled(Box)(({ theme }) => ({
  width: '342px',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    width: '450px'
  }
}));

function Features() {
  return (
    <StyledContainer>
      <Box
        sx={{
          mt: '126px',
          display: 'grid',
          justifyContent: 'center'
        }}
      >
        <SecondaryHeader
          intro='Features'
          features_and_benefits='Everything you need to connect with new people'
          call_to_action='Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.'
        />
      </Box>
      <FeaturesWrapper>
        {features.map((feature, idx) => (
          <FeatureBox key={idx}>
            <Icon>{feature.icon}</Icon>
            <Typography
              sx={{
                color: 'white',
                fontFamily: 'var(--plus-jakarta-font)',
                fontWeight: '600',
                lineHeight: 1.75,
                mt: '23px',
                mb: '10px'
              }}
            >
              {feature.title}
            </Typography>
            <Typography
              sx={{
                color: 'hsl(216, 12%, 84%)',
                fontFamily: 'var(--plus-jakarta-font)',
                fontSize: '0.9375rem',
                lineHeight: 1.86667
              }}
            >
              {feature.body}
            </Typography>
          </FeatureBox>
        ))}
      </FeaturesWrapper>
    </StyledContainer>
  );
}

export default Features;
