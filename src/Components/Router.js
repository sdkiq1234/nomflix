import React from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "../Routes/Home/";
import Search from "../Routes/Search/";
import TV from "../Routes/TV/";
import Detail from "../Routes/Detail/";
import Header from "./Header";

const Router = () => (
  <HashRouter>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" component={TV} />
        <Route path="/search" component={Search} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/show/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </HashRouter>
);

export default Router;
