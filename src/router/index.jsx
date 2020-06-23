import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "../views/Home/Home";
import Test from "../views/Test/Test";

const BasicRoute = () => (
  <Router>
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/test" component={Test}></Route>
    </Switch>
  </Router>
);

export default BasicRoute;
