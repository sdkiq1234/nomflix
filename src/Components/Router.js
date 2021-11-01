import React from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import Search from "../Routes/Search";
import TV from "../Routes/TV";

const Router = () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" component={TV} />
      <Route path="/search" component={Search} />
      <Redirect from="*" to="/" />
    </Switch>
  </HashRouter>
);

export default Router;
