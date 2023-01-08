import {
  createContext,
  useContext,
  ReactNode,
  useState,
  SetStateAction,
} from "react";

export type Type = "Paper" | "Scissors" | "Rock" | "None";

const Context = createContext({
  score: 0,
  setScore: (cb: SetStateAction<number>) => {},
  picked: "None" as Type,
  setPicked: (val: Type) => {},
  result: "",
  setResult: (val: string) => {},
  isRulesModelOpen: false,
  setRulesModelOpening: (val: boolean) => {},
});

export const useGame = () => {
  return useContext(Context);
};

export default function Game({ children }: { children: ReactNode }) {
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<Type>("None");
  const [result, setResult] = useState("");
  const [isRulesModelOpen, setRulesModelOpening] = useState(false);

  return (
    <Context.Provider
      value={{
        score,
        setScore,
        picked,
        setPicked,
        result,
        setResult,
        isRulesModelOpen,
        setRulesModelOpening,
      }}
    >
      {children}
    </Context.Provider>
  );
}
