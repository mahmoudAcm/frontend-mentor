import { Box, InputBase, MenuItem, OutlinedInput, Select, SelectChangeEvent, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ChangeEvent, Dispatch, memo, useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Filters = styled(Box)(({ theme }) => ({
  margin: '48px 0px',
  display: 'flex',
  '--_shadow-color': theme.palette.__mode === 'DARK' ? 'hsl(205, 28%, 16%)' : 'hsl(0, 0%, 93%)',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: 50
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: 30,
    marginBottom: 40
  }
}));

const SearchBox = styled(Box)(({ theme }) => ({
  width: 'min(480px, 100%)',
  minHeight: 56,
  padding: '18px 32px',
  borderRadius: 4,
  background: theme.palette.background.paper,
  display: 'flex',
  alignItems: 'center',
  boxShadow: '0 0 20px 2px var(--_shadow-color)',
  marginRight: 'auto',
  [theme.breakpoints.down('sm')]: {
    padding: '19px 39px 19px 38px'
  }
}));

const Input = styled(InputBase)(({ theme }) => ({
  fontSize: 14 / theme.typography.htmlFontSize + 'rem',
  fontWeight: 600,
  letterSpacing: -0.14,
  lineHeight: 19 / 14,
  marginLeft: 24,
  '& input': {
    height: 'auto',
    padding: 0,
    '&::placeholder': {
      opacity: 0.85,
      fontWeight: 300,
      color: theme.palette.__mode === 'DARK' ? 'hsl(0, 0%, 100%)' : 'hsl(240, 0%, 65%)'
    }
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 15 / theme.typography.htmlFontSize + 'rem',
    lineHeight: 21 / 15
  }
}));

const SelectRegion = styled(Select)(({ theme }) => ({
  width: 200,
  background: theme.palette.background.paper,
  boxShadow: '0 0 20px 2px var(--_shadow-color)',
  // color: theme.palette.__mode === 'DARK' ? 'hsl(0, 0%, 100%)' : 'hsl(240, 0%, 65%)',
  '& svg': {
    color: theme.palette.text.primary,
    fontSize: 18 / 16 + 'rem',
    right: 17,
    [theme.breakpoints.down('sm')]: {
      right: 30
    }
  },
  '& fieldset': {
    border: 'none !important'
  },
  '& .MuiInputBase-input': {
    padding: '18.5px 25px',
    minHeight: 'auto',
    [theme.breakpoints.down('sm')]: {
      padding: '19.5px 31px'
    }
  }
}));

const RegionOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  fontSize: 13.64 / theme.typography.htmlFontSize + 'rem',
  lineHeight: 19 / 13.64,
  letterSpacing: 0.136,
  [theme.breakpoints.down('sm')]: {
    fontSize: 14.78 / theme.typography.htmlFontSize + 'rem',
    lineHeight: 20 / 14.78,
    letterSpacing: 0
  }
}));

const RegionItem = styled(MenuItem)(({ theme }) => ({
  fontSize: 13.64 / theme.typography.htmlFontSize + 'rem',
  lineHeight: 19 / 13.64,
  letterSpacing: 0.136,
  paddingLeft: 24,
  paddingRight: 24,
  [theme.breakpoints.down('sm')]: {
    minHeight: 22
  }
}));

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

interface CountriesFiltersProps {
  onChange: Dispatch<boolean>;
}

function CountriesFilters(props: CountriesFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(() => searchParams.get('filter') ?? '');
  const [region, setRegion] = useState(() => {
    const defaultValue = searchParams.get('region') ?? '';
    if (regions.includes(defaultValue)) return defaultValue;
    return '';
  });

  const timeoutRef = useRef<any>(null);

  const debounce = (cb: () => void) => {
    props.onChange(true);
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(cb, 250);
  };

  const setSearchParams = (init: Record<string, string>) => {
    const params = new URLSearchParams(init).toString();
    router.replace('?' + params, {
      scroll: false
    });
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    debounce(() => setSearchParams({ filter: event.target.value, region }));
  };

  const handleRegionChange = (event: SelectChangeEvent) => {
    setRegion(event.target.value);
    debounce(() => setSearchParams({ filter: search, region: event.target.value }));
  };

  //when the route changes this means the data has been loaded
  useEffect(() => {
    props.onChange(false);
  }, [props, searchParams]);

  return (
    <Filters>
      <SearchBox>
        <SearchIcon
          sx={{
            fontSize: 18 / 16 + 'rem',
            color: ({ palette }) => (palette.__mode === 'DARK' ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 50%)')
          }}
        />
        <Input
          placeholder='Search for a country i.e +20, Egypt or Cairo'
          fullWidth
          value={search}
          onChange={handleSearchChange}
        />
      </SearchBox>
      <SelectRegion
        displayEmpty
        value={region}
        // @ts-ignore
        onChange={handleRegionChange}
        input={<RegionOutlinedInput />}
        IconComponent={KeyboardArrowDownIcon}
        // @ts-ignore
        renderValue={selected => (!selected ? 'FiIter by Region' : selected)}
        inputProps={{ 'aria-label': 'Without label' }}
        MenuProps={{
          PaperProps: {
            sx: {
              marginTop: '4px',
              '--_shadow-color': theme => (theme.palette.__mode === 'DARK' ? 'hsl(205, 28%, 16%)' : 'hsl(0, 0%, 93%)'),
              boxShadow: '0 5px 15px 2px var(--_shadow-color)'
            }
          }
        }}
      >
        {regions.map((region, index) => (
          <RegionItem key={index} value={region}>
            {region}
          </RegionItem>
        ))}
      </SelectRegion>
    </Filters>
  );
}

export default memo(CountriesFilters);
