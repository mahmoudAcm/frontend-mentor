import data from '../data.json';

export type Destinations = typeof data.destinations;
export type Crew = typeof data.crew;

export const getDestinations = () => {
  return data.destinations;
};

export const getCrew = () => {
  return data.crew;
};
