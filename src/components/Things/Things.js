import { Fragment } from "react/cjs/react.production.min";
import AvailableThings from "./AvailableThings";
import ThingsSummary from "./ThingsSummary";

const Things = (propos) => {
  return (
    <Fragment>
      <ThingsSummary />
      <AvailableThings />
    </Fragment>
  );
};

export default Things;
