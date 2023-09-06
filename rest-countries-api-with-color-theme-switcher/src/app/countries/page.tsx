import { Country } from '@/src/types';
import CountryCard from '@/src/components/CountryCard';
import { Alert, Box, Slide, Snackbar, Typography } from '@mui/material';
import LoudMoreButton from '@/src/app/countries/LoudMoreButton';
import { COUNTRIES_PER_PAGE } from '@/src/constants';
import NoResults from '@/src/app/countries/NoResults';

export default async function CountriesPage({ searchParams }: { searchParams: Record<string, string> }) {
  const resp = await fetch('https://restcountries.com/v3.1/all', { next: { revalidate: 30 * 60 } });
  const countries = (await resp.json()) as Country[];

  const region = searchParams.region ?? '';
  const filter = searchParams.filter ?? '';

  const filterByRegion = (country: Country) => (region ? country.region.toLowerCase() === region.toLowerCase() : true);

  const filterByName = (country: Country) =>
    filter ? [country.name.common, country.name.official].join('').toLowerCase().includes(filter.toLowerCase()) : true;

  const filterByCapital = (country: Country) =>
    filter ? country.capital?.join('').toLowerCase().includes(filter.toLowerCase()) : true;

  const filterByIdd = (country: Country) => {
    if (country.idd && country.idd.root && country.idd.suffixes?.length) {
      return filter ? (country.idd.root + country.idd.suffixes.join('')).includes(filter) : true;
    }
    return false;
  };

  const filteredCountries = countries.filter(
    country => (filterByName(country) || filterByCapital(country) || filterByIdd(country)) && filterByRegion(country)
  );

  if (!filteredCountries.length) return <NoResults />;

  if (searchParams.limit && +searchParams.limit < COUNTRIES_PER_PAGE) {
    return (
      <Snackbar
        open={true}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        TransitionComponent={Slide}
        TransitionProps={{ direction: 'right' } as any}
      >
        <Alert severity='error'>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <Typography>Limit can't be less than {COUNTRIES_PER_PAGE}</Typography>
        </Alert>
      </Snackbar>
    );
  }

  const limit = Math.min(+(searchParams.limit ?? COUNTRIES_PER_PAGE), filteredCountries.length);
  const hasMore = limit < filteredCountries.length;

  return (
    <>
      {filteredCountries.slice(0, limit).map((country, index) => (
        <CountryCard key={index} {...country} animationDelay={(index % COUNTRIES_PER_PAGE) * 90} />
      ))}
      <Box sx={{ gridColumn: '1 / -1', display: hasMore ? 'flex' : 'none' }}>
        <LoudMoreButton limit={limit} countriesCount={filteredCountries.length} />
      </Box>
    </>
  );
}
