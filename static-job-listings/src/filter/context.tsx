import { createContext, useContext, useState } from "react";

const Context = createContext({
  isFilterOpen: false,
});

export const useFilter = () => {
  return useContext(Context);
};

export default function FilterProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [isFilterOpen, setFilterOpening] = useState(true);
  return (
    <Context.Provider value={{ isFilterOpen }}>{children}</Context.Provider>
  );
}
