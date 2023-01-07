import { useTheme, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useGame, Type } from "../context";
import * as items from "./items";
import Result from "./result";
import { StyledStepTwoWrapper, StyledStepTwo } from "./styles";

export default function StepTwo() {
  const theme = useTheme();
  const isMobile = useMediaQuery(() => theme.breakpoints.down("md"));
  const { picked, setResult, setScore } = useGame();
  const housePicked = useRandomeType();

  //watch house choice
  useEffect(() => {
    if (housePicked !== "None") {
      if (picked == "Paper" && housePicked == "Rock") {
        setResult("WIN");
        setScore((score) => score + 1);
      } else if (picked == "Rock" && housePicked == "Scissors") {
        setResult("WIN");
        setScore((score) => score + 1);
      } else if (picked == "Scissors" && housePicked == "Paper") {
        setResult("WIN");
        setScore((score) => score + 1);
      } else if (picked == housePicked) {
        setResult("TIE");
      } else {
        setResult("LOSE");
        setScore((score) => score - 1);
      }
    }
  }, [housePicked]);

  return (
    <StyledStepTwoWrapper>
      <StyledStepTwo>
        <div className="container">
          <h3>YOU PICKED</h3>
          <div className="circle">
            <span className="lvl1"></span>
            <span className="lvl2"></span>
            <span className="lvl3"></span>
            {items[picked]}
          </div>
        </div>
        {!isMobile ? <Result /> : <></>}
        <div className="container">
          <h3>THE HOUSE PICKED</h3>
          <div className="circle">{items[housePicked]}</div>
        </div>
      </StyledStepTwo>
      {isMobile ? <Result /> : <></>}
    </StyledStepTwoWrapper>
  );
}

const useRandomeType = () => {
  const [housePicked, setHousePicked] = useState<Type>("None");
  useEffect(() => {
    const types: Type[] = ["Paper", "Rock", "Scissors"];
    const randomeIndex = Math.floor(Math.random() * 1000000) % 3;
    setHousePicked(types[randomeIndex]);
  }, []);
  return housePicked;
};
