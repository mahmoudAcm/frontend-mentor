export type Country = {
  name: {
    common: string;
    official: string;
  };
  region: string;
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
};
