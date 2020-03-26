import React from "react";
import { Switch, Route } from "react-router-dom";
import Routes from "../routes";

export default () => {
  return (
    <Switch>
      {Routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}
    </Switch>
  );
};
