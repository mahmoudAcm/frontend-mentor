import { useState, useEffect, Dispatch, SetStateAction } from "react";

export default function useLocalStorage<S>(
  initialState: S | (() => S),
  key: string
): [S, Dispatch<SetStateAction<S>>] {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}
