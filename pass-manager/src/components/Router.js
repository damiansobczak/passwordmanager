import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Passwords from "./Passwords";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/passwords" component={Passwords} />
    </Switch>
  </BrowserRouter>
);

export default Router;
