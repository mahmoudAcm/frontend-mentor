import { QueryFunctionContext, useInfiniteQuery } from "react-query";

//types
import { Country } from "types";

async function getCountries(context: QueryFunctionContext<"countries">) {
  let page = context.pageParam ?? 1;

  const res = await fetch(
    "https://frontend-mentor-apis.onrender.com/api/rest-countries-api-with-color-theme-switcher/countries?page=" +
      page
  );
  const result = await res.json();
  return result as {
    info: {
      next: number;
    };
    result: Country[];
  };
}

export default function useCountries() {
  return useInfiniteQuery("countries", getCountries, {
    getNextPageParam: (data) => {
      return data.info?.next;
    },
    keepPreviousData: true,
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
