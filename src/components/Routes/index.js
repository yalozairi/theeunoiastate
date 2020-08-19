import React from "react";
import { Route, Switch } from "react-router";
import Home from "../Home";
import Lookbook from "../Lookbook";
import About from "../About";

const Routes = () => {
  return (
    <Switch>
      <Route path="/lookbook">
        <Lookbook />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
