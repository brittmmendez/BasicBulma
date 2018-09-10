import React from "react";
import { Route, Switch} from 'react-router-dom';
import SecondApp from "./components/BasicBulma";
import BasicBulma from "./components/SecondApp";
import Home from "./components/Home";
import NotFound from "./containers/NotFound";
import ThirdApp from "./components/ThirdApp";


export default () =>
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/basic-bulma' component={BasicBulma} />
    <Route path='/second-app' component={SecondApp} />
    <Route path='/third-app' component={ThirdApp} />
    <Route component={NotFound} />
  </Switch>