import ArcadeIcon from "../icons/Arcade";
import AdvancedIcon from "../icons/Advanced";
import ProIcon from "../icons/Pro";

const iconBox = { width: 40, height: 40 };
const plans = [
  {
    type: "Arcade",
    icon: <ArcadeIcon sx={iconBox} />,
    yearly: {
      price: "$90/yr",
      offer: "2 months free",
    },
    monthly: {
      price: "$90/mo",
    },
  },
  {
    type: "Advanced",
    icon: <AdvancedIcon sx={iconBox} />,
    yearly: {
      price: "$120/yr",
      offer: "2 months free",
    },
    monthly: {
      price: "$12/mo",
    },
  },
  {
    type: "Pro",
    icon: <ProIcon sx={iconBox} />,
    yearly: {
      price: "$150/yr",
      offer: "2 months free",
    },
    monthly: {
      price: "$15/mo",
    },
  },
];

export default plans;
