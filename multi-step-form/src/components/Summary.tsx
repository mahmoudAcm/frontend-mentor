import { Box, styled, alpha, Typography, Link } from "@mui/material";
import { StepperTitleAndSubtitle, SteppterContentLayout } from "./Stepper";
import summary from "../__fakeApi__/summary";

const Details = styled(Box)(({ theme }) => ({
  width: 449,
  minHeight: 86,
  borderRadius: theme.shape.borderRadius / 2,
  backgroundColor: alpha(theme.palette.background.default, 0.6),
  padding: "18.5px 22px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    paddingLeft: 17,
    paddingRight: 17,
  },
}));

const TypeAndPrice = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& .type": {
    fontWeight: theme.typography.fontWeightMedium,
  },
  "& .price": {
    fontWeight: theme.typography.fontWeightBold,
  },
  [theme.breakpoints.down("sm")]: {
    "& .type": {
      fontSize: "0.87rem",
      lineHeight: 1.44,
    },
    "& .price, & a": {
      fontSize: "0.9rem",
      lineHeight: 1.7,
    },
  },
}));

const LeftSide = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  "& a": {
    width: "fit-content",
    color: "#a4a5aa",
    textDecorationColor: "#a4a5aa",
  },
}));

const AddOnsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: 20,
  borderTop: "1px solid #ccc",
  paddingTop: 16,
  gap: 19,
  [theme.breakpoints.down("sm")]: {
    marginTop: 7,
    paddingTop: 10,
    gap: 12,
  },
}));

const AddOns = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const Total = styled(AddOns)(({ theme }) => ({
  marginTop: -10,
  padding: "0 22px",
  "& .total": {
    fontWeight: theme.typography.fontWeightMedium,
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: -2,
    padding: "0 17px",
    "& .total": {
      fontSize: "1.02rem"
    }
  },
}));

export default function Summary() {
  return (
    <SteppterContentLayout>
      <StepperTitleAndSubtitle
        title="Finishing up"
        subtitle="Double-check everything looks OK before confirming."
      />
      <Details>
        <TypeAndPrice>
          <LeftSide>
            <Typography className="type">
              {summary.plan.type} ({summary.isYearly ? "Yearly" : "Monthly"})
            </Typography>
            <Link href="#">Change</Link>
          </LeftSide>
          <Typography className="price">
            {summary.plan[summary.isYearly ? "yearly" : "monthly"].price}
          </Typography>
        </TypeAndPrice>
        {summary.addons.length ? (
          <AddOnsWrapper>
            {summary.addons.map((addons) => (
              <AddOns>
                <Typography variant="body2" color="#a4a5aa">
                  {addons.title}
                </Typography>
                <Typography variant="body2">
                  {addons[summary.isYearly ? "yearly" : "monthly"].price}
                </Typography>
              </AddOns>
            ))}
          </AddOnsWrapper>
        ) : (
          <></>
        )}
      </Details>
      <Total>
        <Typography variant="body2" color="#a4a5aa">
          Total (per {summary.isYearly ? "year" : "month"})
        </Typography>
        <Typography variant="h6" color="secondary" className="total">
          {summary[summary.isYearly ? "yearly" : "monthly"].total}
        </Typography>
      </Total>
    </SteppterContentLayout>
  );
}
