import { useEffect } from "react";
import { StyledRules, Modal } from "./styles";
import RulesIcon from "./rules-icon";
import CloseIcon from "./close-icon";
import { useGame } from "../context";
import { useMediaQuery, useTheme } from "@mui/material";

export default function Rules() {
  const theme = useTheme();
  const isMobile = useMediaQuery(() => theme.breakpoints.down("md"));
  const { isRulesModelOpen, setRulesModelOpening } = useGame();

  useEffect(() => {
    const val = document.body.style.overflow;
    const restore = () => {
      document.body.style.overflow = val;
    };
    if (isRulesModelOpen) document.body.style.overflow = "hidden";
    else restore();
    return restore;
  }, [isRulesModelOpen]);

  const closeIcon = (
    <span
      onClick={() => {
        setRulesModelOpening(false);
      }}
      className="close-icon"
    >
      <CloseIcon />
    </span>
  );

  return (
    <StyledRules className={isRulesModelOpen ? "active" : undefined}>
      <Modal>
        <span className="title">Rules</span>
        {closeIcon}
        <RulesIcon />
      </Modal>
    </StyledRules>
  );
}
