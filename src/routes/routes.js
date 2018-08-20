import React from "react";
import { Switch, Route } from "react-router-dom";
import Welcome from "../components/public/Welcome/Welcome";
import Home from "../components/ilgi/Home/Home";
import Pixel from "../components/ilgi/Pixel/Pixel"
export default (
  <Switch>
    <Route exact path="/" component={()=><Welcome/>} />
    <Route path="/home" component={()=><Home/>} />
    <Route path="/pixel/:date" component={()=><Pixel/>} />
     </Switch>
);