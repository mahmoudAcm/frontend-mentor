import { CSSProperties } from 'react';

export declare module '@mui/material/styles' {
  interface TypographyVariants {
    subheading1: CSSProperties;
    subheading2: CSSProperties;
    nav: CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    subheading1?: CSSProperties;
    subheading2?: CSSProperties;
    nav?: CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyComponentsOptions {
    subheading1?: CSSProperties;
    subheading2?: CSSProperties;
    nav?: CSSProperties;
  }
}

// Update the Typography's variant prop options
export declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    subheading1: true;
    subheading2: true;
    nav: true;
  }
}
