'use client';

import { Box, styled, Typography } from '@mui/material';
import Image from 'next/image';

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
  height: 'auto',
  minHeight: 160,
  maxHeight: 170,
  objectFit: 'cover',
  [theme.breakpoints.down('md')]: {
    minHeight: 199
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

export default function CountryCard() {
  return (
    <Card tabIndex={0}>
      <Flag src='/er.svg' width={200} height={600} alt='country flag' priority />
      <Content>
        <CountryName>Germany</CountryName>
        <Stats>
          <Stat>
            PopuIation: <span>81,770,900</span>
          </Stat>
          <Stat>
            Region: <span>Europ</span>
          </Stat>
          <Stat>
            CapitaI: <span>BerIin</span>
          </Stat>
        </Stats>
      </Content>
    </Card>
  );
}
