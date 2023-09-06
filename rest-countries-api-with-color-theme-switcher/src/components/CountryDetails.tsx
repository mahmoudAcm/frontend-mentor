import { Container } from '@/src/components/Container';
import { Box, BoxProps, Button, styled, Typography } from '@mui/material';
import Image from 'next/image';
import { ReactNode } from 'react';
import useCountryDetailsContext from '@/src/hooks/useCountryDetailsContext';
import { dataBlurUrl } from '@/src/components/data-blur-url';

const Flex = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: 70,
  marginTop: 81,
  justifyContent: 'space-between',
  alignItems: 'start',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    gap: 50
  }
}));

const FlagWrapper = styled(Box)(({ theme }) => ({
  display: 'grid',
  placeItems: 'center',
  maxWidth: 'min(560px, 100%)',
  position: 'relative',
  marginBottom: '24px',
  ['@media(hover:hover)']: {
    '&::after': {
      content: '" "',
      position: 'absolute',
      inset: 0,
      transition: theme.transitions.create(['background'])
    },
    '&:hover': {
      '& .map--btn': {
        zIndex: 1,
        opacity: 1,
        transform: 'translateY(0px)',
        transition: theme.transitions.create(['transform', 'opacity'])
      },
      '&::after': {
        background: 'hsla(0, 0%, 0%, 50%)'
      }
    }
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: 'min(641px, 100%)',
    margin: 'auto'
  }
}));

const OpenMapButton = styled(Button)(({ theme }) => ({
  ['@media(hover: none)']: {
    marginTop: '38px',
    color: theme.palette.text.primary
  },
  ['@media(hover:hover)']: {
    zIndex: -1,
    opacity: 0,
    position: 'absolute',
    color: 'white',
    transform: 'translateY(30px)',
    '&:hover': {
      background: 'none'
    }
  },
  '&::after': {
    content: '" "',
    position: 'absolute',
    bottom: -2,
    width: '100%',
    height: '3px',
    background: 'currentColor',
    transform: 'scaleX(0.4)'
  }
}));

const Flag = styled(Image)(({ theme }) => ({
  maxWidth: 'inherit',
  height: 'auto',
  '--_shadow-color': theme.palette.__mode === 'DARK' ? 'hsl(205, 26%, 16%)' : 'hsla(0, 0%, 50%, 5%)',
  boxShadow: '0 0 0 24px var(--_shadow-color)',
  borderRadius: 4
}));

const DetailsContainer = styled(Box)(({ theme }) => ({
  width: 'min(571px, 100%)',
  marginTop: 38,
  [theme.breakpoints.down('lg')]: {
    width: '100%'
  }
}));

const CountryName = styled(Typography)(({ theme }) => ({
  fontSize: 33.12 / theme.typography.htmlFontSize + 'rem',
  fontWeight: 800,
  lineHeight: 45 / 33.12,
  letterSpacing: -0.994,
  [theme.breakpoints.between('sm', 'lg')]: {
    fontSize: 45 / theme.typography.htmlFontSize + 'rem',
    letterSpacing: -1.35
  }
}));

const StatRoot = styled(Typography)(({ theme }) => ({
  fontSize: 15.7 / theme.typography.htmlFontSize + 'rem',
  fontWeight: 600,
  lineHeight: 21 / 15.7,
  color: theme.palette.__mode === 'DARK' ? 'hsl(208, 18%, 86%)' : undefined,
  '& span': {
    fontWeight: 300
  },
  [theme.breakpoints.between('sm', 'lg')]: {
    fontSize: 30 / theme.typography.htmlFontSize + 'rem',
    letterSpacing: -1.35
  }
}));

const Chip = styled(StatRoot)(({ theme }) => ({
  fontWeight: 500,
  padding: '3px 26px 4px',
  background: theme.palette.background.paper,
  borderRadius: 4,
  '--_shadow-color': theme.palette.__mode === 'DARK' ? 'hsl(205, 28%, 16%)' : 'hsl(0, 0%, 93%)',
  boxShadow: '0 0 20px 2px var(--_shadow-color)'
}));

function Stat<T extends any>(props: { pair: [string, T]; sx?: BoxProps['sx']; children?: (value: T) => ReactNode }) {
  const [key, value] = props.pair;

  if (!value) return <></>;

  if (props.children) {
    return (
      <StatRoot as={Box} sx={props.sx}>
        {key}: {props.children(value)}
      </StatRoot>
    );
  }

  if (typeof value === 'string')
    return (
      <StatRoot sx={props.sx}>
        {key}: <span>{value}</span>
      </StatRoot>
    );

  if (typeof value === 'number')
    return (
      <StatRoot sx={props.sx}>
        {key}: <span>{value.toLocaleString()}</span>
      </StatRoot>
    );

  if (typeof value === 'object' && value instanceof Array && value.length) {
    return (
      <StatRoot sx={props.sx}>
        {key}: <span>{value.join(', ')}</span>
      </StatRoot>
    );
  }

  throw 'Not implemented';
}

export default function CountryDetails() {
  const { details } = useCountryDetailsContext();

  if (!details) return <></>;

  const getCommonOrOfficialNativeName = () => {
    const keys = Object.keys(details.name.nativeName ?? {});
    if (keys.length) return details.name.nativeName?.[keys[0]]?.common ?? details.name.nativeName?.[keys[0]]?.official;
    return details.name.official;
  };

  const getLanguages = () => {
    return Object.values(details.languages ?? {});
  };

  const getCurrencies = () => {
    return Object.keys(details.currencies ?? {});
  };

  const ColumnSx: BoxProps['sx'] = {
    display: 'grid',
    alignContent: 'start',
    gap: { xs: '23px', lg: '11.57px' },
    mt: { xs: '43px', lg: '27.43px' }
  };

  return (
    <Box
      sx={{
        height: '85vh',
        overflow: 'auto'
      }}
    >
      <Box
        sx={{
          background: ({ palette: { __mode } }) =>
            __mode === 'DARK' ? 'rgba(212, 212, 216, 0.5)' : 'rgba(212, 212, 216, 1)',
          width: '60px',
          height: '6px',
          borderRadius: 9999,
          mx: 'auto',
          mt: '20px'
        }}
      />
      <Container>
        <Flex>
          <FlagWrapper>
            <Flag
              src={details.flags.svg ?? '/No_flag.svg.png'}
              width={1200}
              height={600}
              alt={details.flags.alt ?? 'country flag'}
              placeholder={dataBlurUrl}
            />

            {/*//@ts-ignore*/}
            <OpenMapButton className='map--btn' variant='text' target='_blank' href={details.maps.googleMaps}>
              open map
            </OpenMapButton>
          </FlagWrapper>
          <DetailsContainer>
            <CountryName>{details.name.common}</CountryName>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { lg: '1fr 1fr' }
              }}
            >
              <Box sx={ColumnSx}>
                <Stat pair={['Native Name', getCommonOrOfficialNativeName()]} />
                <Stat pair={['PopuIation', details.population]} />
                <Stat pair={['Region', details.region]} />
                <Stat pair={['Sub Region', details.subregion]} />
                <Stat pair={['Capital', details.capital]} />
                <Stat pair={['Start Of Week', details.startOfWeek]}>
                  {startOfWeek => <span style={{ textTransform: 'capitalize' }}>{startOfWeek}</span>}
                </Stat>
              </Box>

              <Box sx={ColumnSx}>
                <Stat pair={['Top Level Domain', details.tld]} sx={{ mt: { xs: '44px', sm: '88px', lg: 0 } }} />
                <Stat pair={['Currencies', getCurrencies()]} />
                <Stat pair={['Languages', getLanguages()]} />
                <Stat pair={['Country Codes', details.idd?.suffixes?.map(suffix => details.idd?.root + suffix)]} />
                {/*<Stat pair={['Map', details.maps?.googleMaps]}>{value => <Link href={value!}> GoogIe maps</Link>}</Stat>*/}
              </Box>
            </Box>

            <Stat
              sx={{
                mt: '75px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '15px',
                alignItems: 'center',
                mb: '124px'
              }}
              pair={['Border Countries', details.borders]}
            >
              {values => {
                if (values.length)
                  return (
                    <Box sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      {values.map((value, index) => (
                        <Chip key={index}>{value}</Chip>
                      ))}
                    </Box>
                  );
                return <></>;
              }}
            </Stat>
          </DetailsContainer>
        </Flex>
      </Container>
    </Box>
  );
}
