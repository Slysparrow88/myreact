import React from "react";
import { Switch, Route } from "react-router-dom";

import Favorites from "../components/pages/posts/Favorites";
import Posts from "../components/pages/posts/Post";

function Router(props) {

  return (
    <Switch>
      <Route path="/" exact component={Posts}/>
      <Route path="/favorites" component={Favorites}/>
    </Switch>
  );

}

export default Router;
