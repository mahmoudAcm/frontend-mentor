import addonslist from "./addons";
import plans from "./plans";

const summary = {
  plan: plans[0],
  isYearly: false,
  addons: addonslist.slice(0, 2),
  yearly: {
    total: "+$120/yr",
  },
  monthly: {
    total: "+$12/mo",
  },
};

export default summary;
