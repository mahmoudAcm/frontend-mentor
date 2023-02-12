import { useState } from "react";
import { Box, styled, Switch, Typography } from "@mui/material";
import { StepperTitleAndSubtitle, SteppterContentLayout } from "./Stepper";
import Plan from "./Plan";
import plans from "../__fakeApi__/plans";

const PlanWrapper = styled(Box)(() => ({
  display: "flex",
  gap: 21,
  marginTop: 2,
}));

const Switcher = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: "#f8f9fe",
  height: 47,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: theme.shape.borderRadius / 2,
  gap: 21,
  "& .MuiTypography-root": {
    fontSize: "0.85rem",
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 37,
  height: 18,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    transform: "translateX(1px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(19.5px)",
      "& + .MuiSwitch-track": {
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 12,
    height: 12,
    marginTop: (18 - 12) / 2 - 2,
    borderRadius: "50%",
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    boxShadow: theme.shadows[3],
    borderRadius: 10,
    opacity: 1,
    boxSizing: "border-box",
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function SelectPlan() {
  const [yearly, setYearly] = useState(false);
  const [activePlan, setActivePlan] = useState(0);

  const choosePlan = (idx: number) => () => {
    setActivePlan(idx);
  };

  return (
    <SteppterContentLayout>
      <StepperTitleAndSubtitle
        title="Select your plan"
        subtitle="You have the option of monthly or yearly billing."
      />
      <PlanWrapper>
        {plans.map((plan, idx) => (
          <Plan
            className={idx === activePlan ? "active" : ""}
            key={idx}
            type={plan.type as "ANY"}
            icon={plan.icon}
            price={plan[yearly ? "yearly" : "monthly"].price}
            offer={yearly ? plan.yearly.offer : undefined}
            onClick={choosePlan(idx)}
          />
        ))}
      </PlanWrapper>
      <Switcher>
        <Typography color={yearly ? "gray" : ""}>Monthly</Typography>
        <AntSwitch
          checked={yearly}
          onChange={(_, checked) => {
            setYearly(checked);
          }}
        />
        <Typography color={!yearly ? "gray" : ""}>Yearly</Typography>
      </Switcher>
    </SteppterContentLayout>
  );
}
