export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: Record<
      string,
      {
        official: string;
        common: string;
      }
    >;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  languages: Record<string, string>;
  tld: string[];
  currencies: Record<
    string,
    {
      name: string;
      symbol: string;
    }
  >;
  borders: string[];
  flags: {
    svg: string;
  };
}
