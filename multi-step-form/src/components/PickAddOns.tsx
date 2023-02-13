import { Box, BoxProps, styled } from "@mui/material";
import { useState } from "react";
import addonslist from "../__fakeApi__/addons";
import AddOns from "./AddOns";
import { StepperTitleAndSubtitle, SteppterContentLayout } from "./Stepper";

const AddOnsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  [theme.breakpoints.down("sm")]: {
    gap: 12,
  },
}));

export default function PickAddOns() {
  const [checkdListIds, setCheckedListIds] = useState<number[]>([]);

  const toggleAddons =
    (idx: number): BoxProps["onClick"] =>
    (evt) => {
      evt.stopPropagation();
      setCheckedListIds((prev) => {
        if (prev.includes(idx)) return prev.filter((item) => item !== idx);
        return prev.concat(idx);
      });
    };

  return (
    <SteppterContentLayout>
      <StepperTitleAndSubtitle
        title="Pick add-ons"
        subtitle="Add-ons help enhance your gaming experience."
      />
      <AddOnsWrapper>
        {addonslist.map((addons, idx) => (
          <AddOns
            key={idx}
            title={addons.title}
            subtitle={addons.subtitle}
            price={addons.monthly.price}
            onClick={toggleAddons(idx)}
            className={checkdListIds.includes(idx) ? "active" : ""}
          />
        ))}
      </AddOnsWrapper>
    </SteppterContentLayout>
  );
}
