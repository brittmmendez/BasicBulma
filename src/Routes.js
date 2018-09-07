import React from "react";
import { Route, Switch} from 'react-router-dom';
import BasicBulma from "./components/BasicBulma";
import Home from "./components/Home";
import NotFound from "./containers/NotFound";


export default () =>
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/basic-bulma' component={BasicBulma} />
    <Route component={NotFound} />
  </Switch>