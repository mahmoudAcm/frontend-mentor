import { useEffect } from "react";
import { Box, styled, Switch, Typography } from "@mui/material";
import { StepperTitleAndSubtitle, SteppterContentLayout } from "./Stepper";
import Plan from "./Plan";
import plansData from "../__fakeApi__/plans";
import useForm from "../hooks/useForm";

const PlanWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: 21,
  marginTop: 2,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: 11,
  },
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
  [theme.breakpoints.down("sm")]: {
    gap: 25,
    marginTop: 4,
    marginBottom: 3,
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
  const { updateSelectedPlan, changePlan, plans } = useForm();

  const selectPlan = (id: number) => () => {
    const plan = plansData[id];
    console.log(parseInt(plan[plans.plan].price));
    updateSelectedPlan({
      id: "" + id,
      type: plan.type,
      price: parseInt(plan[plans.plan].price),
    });
  };

  useEffect(() => {
    selectPlan(plans.details.id)();
  }, [plans.plan]);

  return (
    <SteppterContentLayout>
      <StepperTitleAndSubtitle
        title="Select your plan"
        subtitle="You have the option of monthly or yearly billing."
      />
      <PlanWrapper>
        {plansData.map((plan, idx) => (
          <Plan
            className={idx == plans.details.id ? "active" : ""}
            key={idx}
            type={plan.type as "ANY"}
            icon={plan.icon}
            price={
              "$" +
              plan[plans.plan].price +
              "/" +
              (plans.plan === "yearly" ? "yr" : "mo")
            }
            offer={plans.plan === "yearly" ? plan.yearly.offer : undefined}
            onClick={selectPlan(idx)}
          />
        ))}
      </PlanWrapper>
      <Switcher>
        <Typography color={plans.plan === "yearly" ? "gray" : ""}>
          Monthly
        </Typography>
        <AntSwitch
          checked={plans.plan === "yearly"}
          onChange={(_, checked) => {
            changePlan(checked ? "yearly" : "monthly");
          }}
        />
        <Typography color={!(plans.plan === "yearly") ? "gray" : ""}>
          Yearly
        </Typography>
      </Switcher>
    </SteppterContentLayout>
  );
}
