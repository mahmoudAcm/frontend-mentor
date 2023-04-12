import data from '../data.json';

export type Destinations = typeof data.destinations;
export type Crew = typeof data.crew;
export type Technologies = typeof data.technology;

export const getDestinations = () => {
  return data.destinations;
};

export const getCrew = () => {
  return data.crew;

export const getTechnologies = () => {
  return data.technology;
};
