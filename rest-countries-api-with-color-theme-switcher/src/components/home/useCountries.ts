import { useState } from "react";
import { QueryFunctionContext, useInfiniteQuery } from "react-query";

//types
import { Country } from "types";

async function getCountries(context: QueryFunctionContext) {
  let page = context.pageParam ?? 1;

  const res = await fetch(
    "https://frontend-mentor-apis.vercel.app/api/rest-countries-api-with-color-theme-switcher/countries?page=" +
      page
  );
  const result = await res.json();

  if (!res.ok) {
    throw result;
  }

  return result as {
    info: {
      next: number;
    };
    result: Country[];
  };
}

export default function useCountries(queryKey: string[]) {
  const [enabled, setEnabled] = useState(true);
  return useInfiniteQuery(queryKey, getCountries, {
    getNextPageParam: (data) => {
      return data.info?.next;
    },
    keepPreviousData: true,
    enabled,
    retry: false,
    cacheTime: 10000,
    refetchOnWindowFocus: false,
    onSuccess: () => {
      setEnabled(false);
    },
  });
}

export //fake data for a placeHolders
const fakeData = new Array(15).fill({
  isLoading: true,
  name: {
    common: "",
    official: "",
    nativeName: {
      eng: {
        common: "",
        official: "",
      },
    },
  },
  population: 0,
  region: "",
  capital: [],
  flags: {
    svg: "",
  },
});
