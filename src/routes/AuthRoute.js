import React from "react";
import { Route, withRouter } from "react-router-dom";

const AuthRoute = ({
  component: Component,

  ...rest
}) => {
  return <Route {...rest} render={props => <Component {...props} />} />;
};

export default withRouter(AuthRoute);
