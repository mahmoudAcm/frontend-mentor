import { SecondaryHeader, StyledContainer } from '@/src/components/LandingPage/Shared';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import { benefits } from '@/src/components/LandingPage/data';

const StyledImage = styled(Image)(({ theme }) => ({
  borderRadius: '16px',
  maxWidth: '100%',
  height: 'auto',
  marginTop: '-46px',
  [theme.breakpoints.down('md')]: {
    marginTop: '-37px',
    borderRadius: '4px'
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '-16px'
  }
}));

const BenefitsWrapper = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  columnGap: '56px',
  rowGap: '59px',
  marginTop: '134px',
  marginBottom: '134px',
  [theme.breakpoints.down('lg')]: {
    justifyContent: 'center',
    columnGap: '64px',
    rowGap: '46px'
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '83.5px',
    marginBottom: '83.5px'
  }
}));

const Benefit = styled(Box)(({ theme }) => ({
  width: '329px',
  display: 'flex',
  gap: '12px',
  [theme.breakpoints.down('lg')]: {
    width: 'calc(50% - 64px / 2)'
  },
  [theme.breakpoints.down('md')]: {
    width: '85%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}));

function Benefits() {
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
          intro='Everything you need'
          features_and_benefits='Need friends? No problem.'
          call_to_action='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.'
        />
        <Box sx={{ position: 'relative', m: 'auto' }}>
          <StyledImage
            src='/images/illiesteration/Home-01.png'
            alt=''
            width={1155}
            height={1437}
            blurDataURL='/images/illiesteration/top.jpg'
          />
          <Box
            sx={{
              position: 'absolute',
              inset: '0 -12px 0',
              backgroundImage: 'linear-gradient(0.04deg, #111827 1.88%, rgba(17, 24, 39, 0) 22.74%)'
            }}
          ></Box>
        </Box>
        <BenefitsWrapper>
          {benefits.map((benefit, idx) => (
            <Benefit key={idx}>
              {benefit.icon}
              <Typography
                sx={{
                  color: 'hsl(216, 12%, 84%)',
                  fontFamily: 'var(--plus-jakarta-font)',
                  lineHeight: 1.75,
                  fontWeight: '400',
                  mt: '-5px'
                }}
              >
                <span style={{ fontWeight: '600', color: 'white' }}>{benefit.title} </span>
                {benefit.body}
              </Typography>
            </Benefit>
          ))}
        </BenefitsWrapper>
      </Box>
    </StyledContainer>
  );
}

export default Benefits;
