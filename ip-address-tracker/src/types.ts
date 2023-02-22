export type IPAdressResult = {
  ip: string;
  isp: string;
  location: {
    region: string;
    city: string;
    postalCode: string;
    timezone: string;
    lat: number;
    lng: number;
  };
};
