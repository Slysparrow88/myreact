import React from "react";
import { Switch, Route } from "react-router-dom";

import Favorites from "../components/pages/posts/Favorites";
import Posts from "../components/pages/posts/Post";
import PostPage from "../components/pages/posts/PostPage";

function Router(props) {

  return (
    <Switch>
      <Route path="/" exact component={Posts}/>
      <Route path="/favorites" component={Favorites}/>
      <Route path="/post/:id" component={PostPage}/>
    </Switch>
  );

}

export default Router;
