import { Country } from '@/src/types';
import CountryCard from '@/src/components/CountryCard';

const COUNTRIES_PER_PAGE = 10;

export default async function CountriesPage({ searchParams }: { searchParams: Record<string, string> }) {
  const resp = await fetch('https://restcountries.com/v3.1/all', { next: { revalidate: 30 * 60 } });
  const countries = (await resp.json()) as Country[];

  const region = searchParams.region ?? '';
  const filter = searchParams.filter ?? '';

  const page = +(searchParams.page ?? '1');
  const start = (page - 1) * COUNTRIES_PER_PAGE;

  const filterByRegion = (country: Country) => (region ? country.region.toLowerCase() === region.toLowerCase() : true);

  const filterByName = (country: Country) =>
    filter ? [country.name.common, country.name.official].join('').toLowerCase().includes(filter.toLowerCase()) : true;

  const filterByCapital = (country: Country) =>
    filter ? country.capital?.join('').toLowerCase().includes(filter.toLowerCase()) : true;

  const filterByIdd = (country: Country) => {
    if (country.idd && country.idd.root && country.idd.suffixes?.length) {
      return filter ? (country.idd.root + country.idd.suffixes.join('')).includes(filter) : true;
    }
    return true;
  };

  const filteredCountries = countries
    .filter(
      country => (filterByName(country) || filterByCapital(country) || filterByIdd(country)) && filterByRegion(country)
    )
    .slice(start, start + COUNTRIES_PER_PAGE);

  return (
    <>
      {filteredCountries.map((country, index) => (
        <CountryCard key={index} {...country} />
      ))}
    </>
  );
}
