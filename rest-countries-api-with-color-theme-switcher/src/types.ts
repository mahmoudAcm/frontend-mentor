export type Country = {
  name: {
    common: string;
    official: string;
    nativeName: Record<string, { common: string; official: string }>;
  };
  region: string;
  subregion: string;
  population: number;
  capital?: string[];
  idd?: Partial<{
    root: string;
    suffixes: string[];
  }>;
  flags: Partial<{
    png: string;
    svg: string;
    alt: string;
  }>;
  languages?: Record<string, string>;
  borders: string[];
  tld: string[];
  timezones: string[];
  currencies: Record<string, { name: string }>;
  maps: Partial<{
    googleMaps: string;
    openStreetMaps: string;
  }>;
  startOfWeek: string;
};
