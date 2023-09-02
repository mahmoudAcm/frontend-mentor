import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

//types
import { Country } from "../../types";

type QueryResult = Omit<
  Country,
  "tld" | "name" | "languages" | "capital" | "currencies"
> & {
  tld: string;
  name: string;
  nativeName: string;
  languages: string;
  capital: string;
  currencies: string;
};

export default function useCountry(tryAgain: boolean) {
  const { name } = useParams();
  return useQuery(
    [name, tryAgain],
    async ({ queryKey, signal }) => {
      const [name] = queryKey;
      if (!name) return {} as QueryResult;
      const res = await axios.get(
        "https://frontend-mentor-apis.onrender.com/api/rest-countries-api-with-color-theme-switcher/countries/" +
          name,
        {
          signal,
          timeout: 4000,
        }
      );

      const result = res.data;

      if (result?.tld?.length) {
        result.tld = result.tld[0];
      }

      result.languages = Object.values(result?.languages ?? {}).join(", ");

      if (result?.capital?.length) {
        result.capital = result.capital.join(", ");
      }

      result.currencies = Object.keys(result?.currencies ?? {}).join(", ");

      const nativeNameKeys = Object.keys(result?.name?.nativeName);
      if (nativeNameKeys) {
        result.nativeName = result.name.nativeName[nativeNameKeys[0]]?.official;
      }
      result.name = result?.name?.common;

      return result as QueryResult;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
}
