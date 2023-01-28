import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

//types
import { Country } from "../../types";

export default function useCountry() {
  const { name } = useParams();
  const [enabled, setEnabled] = useState(true);
  return useQuery(
    [name ?? ""],
    async ({ queryKey }) => {
      const [name] = queryKey;
      if (!name) return {} as Country;
      const res = await fetch(
        "https://frontend-mentor-apis.onrender.com/api/rest-countries-api-with-color-theme-switcher/countries/" +
          name
      );
      return (await res.json()) as Country;
    },
    {
      enabled,
      retry: 5,
      onSuccess: () => {
        setEnabled(false);
      },
    }
  );
}
