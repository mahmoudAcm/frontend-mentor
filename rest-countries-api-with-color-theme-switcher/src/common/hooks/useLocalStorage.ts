import {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useRef,
  useDeferredValue,
} from "react";

export default function useLocalStorage<S>(
  initialState: S | (() => S),
  key: string
): [S, Dispatch<SetStateAction<S>>] {
  const [state, setState] = useState(initialState);
  const deffredState = useDeferredValue(state);
  const isRendered = useRef(0);
  isRendered.current %= 10;
  isRendered.current += 1;

  useEffect(() => {
    if (isRendered.current > 1) {
      localStorage.setItem(key, JSON.stringify(deffredState));
    }
  }, [deffredState]);

  return [state, setState];
}
