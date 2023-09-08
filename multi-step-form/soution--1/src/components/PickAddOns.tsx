import { Box, BoxProps, styled } from "@mui/material";
import { useEffect } from "react";
import useForm from "../hooks/useForm";
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
  const { addOns, plans, updatePickedAddOns } = useForm();

  const toggleAddons =
    (idx: number): BoxProps["onClick"] =>
    (evt) => {
      evt.stopPropagation();
      updatePickedAddOns((prev) => {
        if (prev.map(({ id }) => Number(id)).includes(idx))
          return prev.filter((item) => item.id !== "" + idx);
        const addOns = addonslist[idx];
        return prev.concat({
          id: "" + idx,
          name: addOns.title,
          price: parseInt(addOns[plans.plan].price),
        });
      });
    };

  useEffect(() => {
    updatePickedAddOns((prev) =>
      prev.map((addOns) => ({
        ...addOns,
        price: parseInt(addonslist[Number(addOns.id)][plans.plan].price),
      }))
    );
  }, [plans.plan]);

  return (
    <SteppterContentLayout>
      <StepperTitleAndSubtitle
        title="Pick add-ons"
        subtitle="Add-ons help enhance your gaming experience."
      />
      <AddOnsWrapper>
        {addonslist.map((addonsItem, idx) => (
          <AddOns
            key={idx}
            title={addonsItem.title}
            subtitle={addonsItem.subtitle}
            price={
              "+$" +
              addonsItem[plans.plan].price +
              (plans.plan === "yearly" ? "/yr" : "/mo")
            }
            onClick={toggleAddons(idx)}
            className={
              addOns.pickedAddOns.map(({ id }) => Number(id)).includes(idx)
                ? "active"
                : ""
            }
          />
        ))}
      </AddOnsWrapper>
    </SteppterContentLayout>
  );
}
