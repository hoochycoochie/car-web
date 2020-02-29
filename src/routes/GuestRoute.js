import React from "react";
import { Route, withRouter } from "react-router-dom";

const GuestRoute = ({
  component: Component,

  ...rest
}) => {
  return <Route {...rest} render={props => <Component {...props} />} />;
};

export default withRouter(GuestRoute);
