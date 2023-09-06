'use client';

import { Box, styled, Typography, keyframes } from '@mui/material';
import Image from 'next/image';
import { Country } from '@/src/types';
import useCountryDetailsContext from '@/src/hooks/useCountryDetailsContext';
import { dataBlurUrl } from '@/src/components/data-blur-url';

const Y = '60px';

const FadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(${Y}) scale(0.98);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const Card = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: 336,
  background: theme.palette.background.paper,
  borderRadius: 4,
  '--_shadow-color': theme.palette.__mode === 'DARK' ? 'hsl(205, 28%, 16%)' : 'hsl(0, 0%, 93%)',
  boxShadow: '0 0 20px 2px var(--_shadow-color)',
  overflow: 'hidden',
  transition: theme.transitions.create('transform'),
  ['@media(hover:hover)']: {
    '&:hover,&:focus-visible': {
      transform: 'scale(1.1)'
    }
  }
}));

const Flag = styled(Image)(({ theme }) => ({
  minWidth: '100%',
  height: 160,
  objectFit: 'cover',
  cursor: 'pointer',
  [theme.breakpoints.down('md')]: {
    height: 199
  }
}));

const Content = styled(Box)(() => ({
  padding: '24px'
}));

const CountryName = styled(Typography)(({ theme }) => ({
  fontSize: 18 / theme.typography.htmlFontSize + 'rem',
  lineHeight: 24 / 18,
  fontWeight: 700,
  letterSpacing: 0.179
}));

const Stats = styled(Box)(() => ({
  display: 'grid',
  gap: 5,
  marginTop: 16
}));

const Stat = styled(Typography)(({ theme }) => ({
  fontSize: 14 / theme.typography.htmlFontSize + 'rem',
  fontWeight: 600,
  lineHeight: 19 / 14,
  letterSpacing: 0.14,
  '& span': {
    fontWeight: 300
  }
}));

interface CountryCardProps extends Country {
  //delay is in milliseconds
  animationDelay: number;
}

export default function CountryCard(props: CountryCardProps) {
  const { setDialogOpen, setDetails } = useCountryDetailsContext();

  return (
    <Box
      sx={{
        opacity: 0,
        transform: `translateY(${Y})`,
        animation: `${FadeInUp} 400ms forwards`,
        animationDelay: props.animationDelay + 'ms'
      }}
    >
      <Card
        tabIndex={0}
        onClick={() => {
          setDialogOpen(true);
          setDetails(props);
        }}
      >
        <Flag
          src={props.flags?.svg ?? '/No_flag.svg.png'}
          width={200}
          height={600}
          alt={props.flags.alt ?? 'country flag'}
          priority
          placeholder={dataBlurUrl}
        />
        <Content>
          <CountryName>{props.name.common}</CountryName>
          <Stats>
            <Stat>
              PopuIation: <span>{props.population.toLocaleString()}</span>
            </Stat>
            <Stat>
              Region: <span>{props.region}</span>
            </Stat>
            {props.capital && (
              <Stat>
                CapitaI: <span>{props.capital?.join(' ')}</span>
              </Stat>
            )}
          </Stats>
        </Content>
      </Card>
    </Box>
  );
}
