import { useDeferredValue, useEffect } from "react";
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import { QueryFunctionContext, useInfiniteQuery } from "react-query";

//types
import { Country } from "types";
import { FilterState } from "./filters";

type QueryKey = [FilterState, boolean];
export type QueryResult = {
  info: {
    next: number | null;
  };
  result: Country[];
};

/**
 * @param filters {FilterState}
 * @returns a query representation i.e name=xxx
 */
const transformFilters = (filters: FilterState) => {
  const query = Object.entries(filters)
    .filter(([, value]) => Boolean(value))
    .map(([key, value]) => key + "=" + value)
    .join("&");
  if (query) return "&" + query;
  return query;
};

async function getCountries(context: QueryFunctionContext) {
  let page = context.pageParam ?? 1;
  let link = `https://frontend-mentor-apis.vercel.app/api/rest-countries-api-with-color-theme-switcher/countries?page=${page}`;

  const [filters] = context.queryKey as QueryKey;

  const query = transformFilters(filters);
  if (query) link = encodeURI(link + query);

  const res = await fetch(link, {
    signal: context.signal,
  });

  if (res.status === 404) {
    return {
      info: {
        next: null,
      },
      result: [],
    };
  }

  const result = await res.json();

  if (!res.ok) {
    throw result;
  }

  return result as QueryResult;
}

export function useCountries(filters: FilterState, tryAgain: boolean) {
  const deferredFilters = useDeferredValue(filters);
  return useInfiniteQuery([deferredFilters, tryAgain], getCountries, {
    getNextPageParam: (data) => {
      return data.info?.next;
    },
    retry: false,
    cacheTime: 10000,
    refetchOnWindowFocus: false,
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

export function useFetchNextPage<Q extends Function>(
  hasNextPage: boolean | undefined,
  fetchFn: Q
) {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "60px",
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchFn();
    }
  }, [inView, hasNextPage]);

  return { ref, inView };
}
