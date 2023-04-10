import data from '../data.json';

export type Destinations = typeof data.destinations;

export const getDestinations = () => {
  return data.destinations;
};
